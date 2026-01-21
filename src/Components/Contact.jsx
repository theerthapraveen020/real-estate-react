import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
     initial={{opacity:0,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
       Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
         With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
       Ready to Make a Move? Let's Build Your Future Together
      </p>


      <form action="https://api.web3forms.com/submit" method="POST" className="max-w-2xl mx-auto text-gray-600 pt-8"> 
        <input type="hidden" name="access_key" value="d6439935-9468-40e0-a837-301fbcf2944e"></input>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">Your Name
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required />
            </div>
              <div className="w-full md:w-1/2 text-left md:pl-4">Your Email
            <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required />
            </div>
        </div>

        <div className="my-6 text-left">
            Message
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" id="" required></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
            Send Message
        </button>

      </form>
    </motion.div>
  );
};

export default Contact;
