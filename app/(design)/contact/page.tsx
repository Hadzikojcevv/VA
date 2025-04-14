import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-[88px] flex justify-center items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 basis-full lg:basis-1/2">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 tracking-tighter">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                className="w-full border border-gray-300 px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center basis-1/2">
          <h3 className="text-2xl font-medium mb-4 tracking-tighter">Contact Information</h3>
          <p className="mb-4">We’d love to hear about your dream space.</p>
          <ul className="space-y-4 text-sm">
            <li>
              <strong>Phone:</strong> +389 77 123 456
            </li>
            <li>
              <strong>Email:</strong> office@vaconcepts.com
            </li>
            <li>
              <strong>Address:</strong> 123 Marshal Tito, Gevgelija, North Macedonia
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-medium mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Pinterest
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
