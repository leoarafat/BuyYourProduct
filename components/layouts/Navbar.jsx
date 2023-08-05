"use client";
import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";
import { Badge, IconButton } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useContext, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const { data } = useSession();
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);
  return (
    <nav class="w-full bg-[#3f51b5]">
      <div class="container m-auto px-6 md:px-12 lg:px-7">
        <div class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            class="peer hidden"
          />
          <div class="w-full flex justify-between md:w-max md:px-0">
            <a href="#" aria-label="logo">
              <Link href="/">
                <p className="font-bold text-xl text-gray-300">BudgetBazaar</p>
              </Link>
            </a>

            <div class="flex items-center md:hidden max-h-10">
              <label
                role="button"
                for="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                class="relative z-40 px-2 py-3 sm:-mr-6"
              >
                <div
                  id="line"
                  class="m-auto h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                ></div>
                <div
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            for="toggle_nav"
            class="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"
          ></label>

          <div
            class="flex z-50 flex-col md:flex-row justify-between 
            items-center gap-y-4 p-6 bg-[#263238] md:w-8/12 
            md:gap-y-4 md:p-0 
            md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
            md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0"
          >
            <div class="flex md:hidden w-full pb-5">
              <a href="#" aria-label="logo">
                <p className="font-bold text-xl text-gray-300">BudgetBazaar</p>
              </a>
            </div>
            <div class="block w-full h-full md:h-auto">
              <ul class="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                <li>
                  <a href="#" class="block md:px-3">
                    <Link href="/">
                      <div
                        class="relative text-gray-300
                                            before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800"
                      >
                        <span>Home</span>
                      </div>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="#" class="block md:px-3 group">
                    <Link href="/all-products">
                      <div
                        class="relative text-gray-600
                                            before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span class="transition group-hover:text-yellow-300 text-gray-300 dark:group-hover:text-yellow-300">
                          Products
                        </span>
                      </div>
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="block md:px-3 group">
                    <div
                      class="relative text-gray-600
                                            before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                    >
                      <span class="transition group-hover:text-yellow-300 text-gray-300 dark:group-hover:text-yellow-300">
                        <Link href={"/cart"}>
                          <IconButton className="" color="inherit">
                            <Badge
                              badgeContent={cartItems?.length || 0}
                              color="error"
                            >
                              <ShoppingCartIcon />
                            </Badge>
                          </IconButton>
                        </Link>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row ">
              {data?.user ? (
                <button
                  onClick={handleLogout}
                  type="button"
                  title="Logout"
                  class="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                >
                  <span class="block text-gray-300 font-semibold group-focus:text-yellow-300 dark:group-focus:text-yellow-100">
                    Logout
                  </span>
                </button>
              ) : (
                <>
                  {" "}
                  <Link href="/login">
                    <button
                      type="button"
                      title="Start buying"
                      class="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                    >
                      <span class="block text-gray-300 font-semibold group-focus:text-yellow-300 dark:group-focus:text-yellow-100">
                        Login
                      </span>
                    </button>
                  </Link>
                </>
              )}
              {data?.user && (
                <Link href="/me">
                  <button
                    type="button"
                    title="Start buying"
                    class="w-full py-3 px-6 text-center transition dark:bg-gray-700 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max"
                  >
                    <span class="block text-white font-semibold">Profile</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
