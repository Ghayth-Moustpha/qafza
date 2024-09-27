import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import BookingSection from "../sections/BookingSection";

const ContactUsPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle sending the message (API or other service)
    setSuccess(true);
  };

  return (
    <div className=" bg-gray-100 p-5">
      <motion.div
        className=" bg-white shadow-md rounded-lg p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <img
                      src="https://pagedone.io/asset/uploads/1696488602.png"
                      alt="ContactUs tailwind section"
                      className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                    />
                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 right-11">
                     تواصل مع فريق قفزة 
                    </h1>
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-white rounded-lg p-6 block">
                        <div className="mb-6 flex">
                        <svg width="20" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> 
                          <h5 className="text-black text-base font-normal leading-6 " dir="ltr">
                          +963-777982630
                          </h5>
                        </div>
                        <div className="mb-6">
                          <h5 className="text-black text-base font-normal leading-6">
                            Pagedone1234@gmail.com
                          </h5>
                        </div>
                        <div>
                          <h5 className="text-black text-base font-normal leading-6">
                            654 Sycamore Avenue, Meadowville, WA 76543
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                  Send Us A Message
                </h2>
                <form onSubmit={handleMessageSubmit}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                    placeholder="Phone"
                  />
                  <div className="mb-10">
                    <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                      Preferred method of communication
                    </h4>
                    <div className="flex">
                      <div className="flex items-center mr-11">
                        <input
                          id="radio-group-1"
                          type="radio"
                          name="radio-group"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio-group-1"
                          className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                        >
                          <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>{" "}
                          Email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="radio-group-2"
                          type="radio"
                          name="radio-group"
                          className="hidden"
                        />
                        <label
                          htmlFor="radio-group-2"
                          className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                        >
                          <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>{" "}
                          Phone
                        </label>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                    placeholder="Message"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
                  >
                    Send
                  </button>
                  {success && (
                    <p className="mt-5 text-green-500">
                      Message sent successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
          <BookingSection/>

        </section>

      </motion.div>
    </div>
  );
};

export default ContactUsPage;
