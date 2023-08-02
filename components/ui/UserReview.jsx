// "use client";
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Autoplay, Pagination } from "swiper";
// import "./Reviews.css";

// const Reviews = () => {
//   return (
//     <div className="mb-10" data-aos="fade-up" data-aos-duration="3000">
//       <div className="my-10">
//         <h2 className="text-center text-2xl font-bold md:text-4xl">
//           What My <span className="text-primary">Clients Say</span>
//         </h2>

//         <h1 className="text-center">
//           Most common methods for designing websites that work well on desktop
//           is responsive and adaptive design
//         </h1>
//       </div>
//       <>
//         <Swiper
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md ">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu8EQ-FamWdIrg_1tjAHb7PgUpHu8JNec99hqTzB-g=w60-h60-p-rp-mo-br100"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Rich Forsen</h4>
//                     <span className="text-xs">2 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   I rarely like to write reviews, but the Marketify team truly
//                   deserve a standing ovation for their customer support,
//                   customisation and most importantly, friendliness and
//                   professionalism. Many thanks once again for everything and
//                   hope that I get to deal with you again in the near future.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu8LY_Jf6cpFo8-FCPbPUTcyRhxa77JFes319J7V=w36-h36-p-rp-mo-br100"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Doug Newton</h4>
//                     <span className="text-xs ">2 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   Really the Code Quality, Customer Support, and design are
//                   awesome and its good support they are giving. They give an
//                   instant solution to our needs. Really awesome. I will strongly
//                   recommend to my friends. Simply amazing team and amazing
//                   theme! Thank you from United States of America!
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu-MDro-vrWl2jD_EVstpAHHUJbsrSXMnrGR_1pbqw=w60-h60-p-rp-mo-br100"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Bill Scott</h4>
//                     <span className="text-xs ">4 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   Loved the template design, documentation, customizability and
//                   the customer support from Marketify team! I am a noob in
//                   programming with very little knowledge about coding but the
//                   Marketify team helped me to launch my resume website
//                   successfully. Much recommended!
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  ">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu8e2GsH7h1nFRaev9zT8mw1so1_eOMD6XURjdKw=w40-h40-p-rp-mo-br40"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Lindsey C.</h4>
//                     <span className="text-xs ">2 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   Loved the template design, documentation, customizability and
//                   the customer support from Marketify team! I am a noob in
//                   programming with very little knowledge about coding but the
//                   Marketify team helped me to launch my resume website
//                   successfully. Much recommended!
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  ">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu90JHMwE5un3NE81Wf24hTPCbGoE47ebsulm-n8UA=w60-h60-p-rp-mo-br100"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Thomas L. Archambault</h4>
//                     <span className="text-xs ">6 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   I rarely like to write reviews, but the Marketify team truly
//                   deserve a standing ovation for their customer support,
//                   customisation and most importantly, friendliness and
//                   professionalism. Many thanks once again for everything and
//                   hope that I get to deal with you again in the near future.
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  ">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu9T1BeKVEc2T9MGBPhL8fhVzxdtz6iKxUBE-r-bWA=w60-h60-p-rp-mo-br100"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Chris Brockhurst</h4>
//                     <span className="text-xs ">7 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   Really the Code Quality, Customer Support, and design are
//                   awesome and its good support they are giving. They give an
//                   instant solution to our needs. Really awesome. I will strongly
//                   recommend to my friends. Simply amazing team and amazing
//                   theme! Thank you from United States of America!
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  ">
//               <div className="flex justify-between p-4">
//                 <div className="flex space-x-4">
//                   <div>
//                     <img
//                       src="https://lh3.googleusercontent.com/a-/ACNPEu-7UHlTgOxc7vCb5fyCIBUTWOKdyPD9LSXQsONr=w60-h60-p-rp-mo-br100"
//                       alt=""
//                       className="object-cover w-12 h-12 rounded-full "
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Brandon Johnson</h4>
//                     <span className="text-xs ">2 days ago</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 dark:text-yellow-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
//                   </svg>
//                   <span className="text-xl font-bold">4.5</span>
//                 </div>
//               </div>
//               <div className="p-4 space-y-2 text-sm ">
//                 <p>
//                   Loved the template design, documentation, customizability and
//                   the customer support from Marketify team! I am a noob in
//                   programming with very little knowledge about coding but the
//                   Marketify team helped me to launch my resume website
//                   successfully. Much recommended!
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </>
//     </div>
//   );
// };

// export default Reviews;
import React from "react";

const UserReview = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default UserReview;
