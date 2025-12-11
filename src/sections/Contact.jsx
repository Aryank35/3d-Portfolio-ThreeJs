import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ 1. Init EmailJS once with your public key
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    });

    console.log("Service ID:", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      }
    );

    console.log("EmailJS success:", result);
    setForm({ name: "", email: "", message: "" });
    alert("Message sent successfully 🚀");
  } catch (error) {
    console.error("EmailJS Error object:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact"
      className="flex-center section-padding bg-black text-white"
    >
      <div className="w-full max-w-7xl md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          {/* Left: Contact Form */}
          <div className="xl:col-span-5 flex justify-center">
            <div className="w-full card-border rounded-xl p-6 sm:p-10 bg-white/5 backdrop-blur-md">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-white/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white/70">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder:text-white/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* 🔗 Direct Contact Links */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <a
                  href="mailto:aryan5935kishan@gmail.com"
                  className="hover:text-white underline underline-offset-4"
                >
                  ✉️ Send Email
                </a>
                <a
                  href="https://wa.me/919337440067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 underline underline-offset-4"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: 3D Model / Visual */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
