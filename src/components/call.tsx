"use client";

import Image from "next/image";
import { useState } from "react";

const Call = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1696px] mx-auto gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
      {/* First Column - SEO Header */}
      <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10 pt-6 lg:pt-10">
        <div
          className="relative overflow-hidden rounded-3xl w-full"
          style={{
            maxWidth: '540.67px',
            aspectRatio: '540.67 / 453.56',
            opacity: 0.71,
          }}
        >
          <Image
            src="/Home.png"
            alt="Home section"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Second Column - FAQ Image */}
      <div className="flex-1 w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-6">
        <div
          className="relative overflow-visible w-full"
          style={{
            maxWidth: '307.56px',
            aspectRatio: '307.56 / 217',
            opacity: 1,
          }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="/CALL.png"
              alt="CALL header"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          {/* Pseudo.png overlay */}
          <div
            className="absolute z-10"
            style={{
              opacity: 1,
              top: '35%',
              left: '10%',
            }}
          >
            <Image
              src="/pseudo.png"
              alt="Decorative wavy line"
              width={84}
              height={10}
              className="object-contain"
              style={{
                width: 'clamp(60px, 8vw, 84px)',
                height: 'auto',
              }}
            />
          </div>
          {/* Text overlay */}
          <div
            className="absolute z-10 text-left w-full"
            style={{
              opacity: 1,
              top: '70%',
              left: '10%',
              transform: 'translateY(-50%)',
              fontFamily: 'var(--font-jost), sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(24px, 4vw, 42px)',
              lineHeight: 'clamp(30px, 5vw, 53px)',
              letterSpacing: '0.42px',
              color: '#FFFFFF',
              width: '100%',
            }}
          >
            <div style={{ whiteSpace: 'nowrap' }}>Ready to Work Together</div>
            <div style={{ whiteSpace: 'nowrap' }}>In News Projects ?</div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md lg:ml-15 mt-6 lg:mt-10">
          <div className="flex flex-col gap-2">
            {/* <label className="text-white text-sm">Your Name*</label> */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name *"
              className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              style={{ borderRadius: '4px' }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <label className="text-white text-sm">Your Email*</label> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email *"
              className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              style={{ borderRadius: '4px' }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <label className="text-white text-sm">Your Message*</label> */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message *"
              rows={5}
              className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm sm:text-base"
              style={{ borderRadius: '4px' }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90 self-start text-sm sm:text-base"
            style={{
              background: 'linear-gradient(270deg, #186EF2 0%, #6D18EF 100%)',
              maxWidth: '200px',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Call;

