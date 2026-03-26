"use client"
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  if (state.succeeded) {
    return <p>Message Sent!</p>;
  }


  return (
    <div>
      <p>Want to work together?</p>
      <p>Get in touch ! </p>
      <form
        action={handleSubmit}
        method="POST"
        className="mx-auto max-w-xl place-items-center"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm/6 font-semibold">First name</label>
            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                name="first-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-semibold">Last name</label>
            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                name="last-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold">Email</label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                name="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#44622D] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#304620]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}


// export default function ContactForm() {
//   const [state, handleSubmit] = useForm("mojpqwqv");
//   if (state.succeeded) {
//     return <p>Message Sent!</p>;
//   }
//   return (
//     <form
//       action="https://formspree.io/f/{FORM_ID}"
//       method="POST"
//       className="grid place-items-center gap-4"
//     >
//       <div className="flex flex-col gap-2">
//         <label className="text-sm">Your Name</label>
//         <input
//           id="name"
//           name="name"
//           required
//           className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <label className="text-sm">Email</label>
//         <input
//           id="email"
//           name="email"
//           required
//           className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//         />
//       </div>
//           <div className="sm:col-span-2">
//         <label className="block text-sm/6 font-semibold">Message</label>
//         <div className="mt-2.5">
//         <textarea
//           id="message"
//           name="message"
//           required
//           className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//         ></textarea>
//         </div>
//         </div>

//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="rounded-full bg-[#44622D] px-5 text-lg font-semibold transition-colors duration-200 hover:bg-[#304620] focus:ring-4 focus:ring-[#fdcf4c] focus:outline-none"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }
