import getRawBody from "raw-body";
import Stripe from "stripe";
import Order from "../models/order";
import APIFilters from "../utils/APIFilters";
import ErrorHandler from "../utils/errorHandler";
import fs from "fs"; // Import the fs module for file handling
import User from "../models/user"; // Import the User model
import { uploads } from "../utils/cloudinary"; // Import the cloudinary upload function

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export const getOrders = async (req, res) => {
  try {
    const resPerPage = 2;
    const ordersCount = await Order.countDocuments();

    const apiFilters = new APIFilters(Order.find(), req.query).pagination(
      resPerPage
    );

    const orders = await apiFilters.query.find().populate("shippingInfo user");

    res.status(200).json({
      ordersCount,
      resPerPage,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.query.id).populate(
      "shippingInfo user"
    );

    if (!order) {
      return next(new ErrorHandler("No Order found with this ID", 404));
    }

    res.status(200).json({
      order,
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    next(new ErrorHandler("No Order found with this ID", 404));
  }
};

export const myOrders = async (req, res) => {
  try {
    const resPerPage = 2;
    const ordersCount = await Order.countDocuments();

    const apiFilters = new APIFilters(Order.find(), req.query).pagination(
      resPerPage
    );

    const orders = await apiFilters.query
      .find({ user: req.user._id })
      .populate("shippingInfo user");

    res.status(200).json({
      ordersCount,
      resPerPage,
      orders,
    });
  } catch (error) {
    console.error("Error fetching user's orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    let order = await Order.findById(req.query.id);

    if (!order) {
      return next(new ErrorHandler("No Order found with this ID", 404));
    }

    order = await Order.findByIdAndUpdate(req.query.id, {
      orderStatus: req.body.orderStatus,
    });

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    next(new ErrorHandler("No Order found with this ID", 404));
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    let order = await Order.findById(req.query.id);

    if (!order) {
      return next(new ErrorHandler("No Order found with this ID", 404));
    }

    await order.deleteOne();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    next(new ErrorHandler("No Order found with this ID", 404));
  }
};

export const canReview = async (req, res) => {
  try {
    const productId = req.query.productId;

    const orders = await Order.find({
      user: req?.user?._id,
      "orderItems.product": productId,
    });

    let canReview = orders?.length >= 1 ? true : false;

    res.status(200).json({
      canReview,
    });
  } catch (error) {
    console.error("Error checking if the user can review:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const checkoutSession = async (req, res) => {
  try {
    const body = req.body;

    const line_items = body?.items?.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
            metadata: { productId: item.product },
          },
          unit_amount: item.price * 100,
        },
        tax_rates: ["txr_1NWjiBDhs9jrqdoDcIEqd6Ez"],
        quantity: item.quantity,
      };
    });

    const shippingInfo = body?.shippingInfo;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: `${process.env.API_URL}/me/orders?order_success=true`,
      cancel_url: `${process.env.API_URL}`,
      customer_email: req?.user?.email,
      client_reference_id: req?.user?._id,
      mode: "payment",
      metadata: { shippingInfo },
      shipping_options: [
        {
          shipping_rate: "shr_1NWXJtDhs9jrqdoDg67WlIdM",
        },
      ],
      line_items,
    });

    res.status(200).json({
      url: session.url,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function getCartItems(line_items) {
  return new Promise((resolve, reject) => {
    let cartItems = [];

    line_items?.data?.forEach(async (item) => {
      const product = await stripe.products.retrieve(item.price.product);
      const productId = product.metadata.productId;

      cartItems.push({
        product: productId,
        name: product.name,
        price: item.price.unit_amount_decimal / 100,
        quantity: item.quantity,
        image: product.images[0],
      });

      if (cartItems.length === line_items?.data.length) {
        resolve(cartItems);
      }
    });
  });
}

export const webhook = async (req, res) => {
  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers["stripe-signature"];

    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const line_items = await stripe.checkout.sessions.listLineItems(
        event.data.object.id
      );

      const orderItems = await getCartItems(line_items);
      const userId = session.client_reference_id;
      const amountPaid = session.amount_total / 100;

      const paymentInfo = {
        id: session.payment_intent,
        status: session.payment_status,
        amountPaid,
        taxPaid: session.total_details.amount_tax / 100,
      };

      const orderData = {
        user: userId,
        shippingInfo: session.metadata.shippingInfo,
        paymentInfo,
        orderItems,
      };

      const order = await Order.create(orderData);
      res.status(201).json({ success: true });
    }
  } catch (error) {
    console.error("Error processing webhook event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
