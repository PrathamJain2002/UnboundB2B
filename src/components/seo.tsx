"use client";

import Image from "next/image";
import { useState } from "react";

const Seo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBox = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1696px] mx-auto gap-6 px-4 lg:px-0 overflow-x-hidden">
      {/* First Column - SEO Header */}
      <div className="flex-1 w-full lg:w-1/2 lg:pl-4">
        <div
          className="relative overflow-visible mx-auto lg:mx-0"
          style={{
            width: '307.56px',
            height: '217px',
            opacity: 1,
            maxWidth: '100%',
          }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="/SEO.png"
              alt="SEO header"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          {/* Pseudo.png overlay */}
          <div
            className="absolute z-10"
            style={{
              width: '84px',
              height: '10px',
              opacity: 1,
              top: '35%',
              left: '20%',
            }}
          >
            <Image
              src="/pseudo.png"
              alt="Decorative wavy line"
              width={84}
              height={10}
              className="object-contain"
            />
          </div>
          {/* Text overlay */}
          <div
            className="absolute z-10 text-left"
            style={{
              width: '432.81px',
              height: '114px',
              opacity: 1,
              top: '70%',
              left: '15%',
              transform: 'translateY(-50%)',
              fontFamily: 'var(--font-jost), sans-serif',
              fontWeight: 600,
              fontSize: '42px',
              lineHeight: '53px',
              letterSpacing: '0.42px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            Manage Business SEO<br />Optimization Easily
          </div>
          {/* Sub-header text */}
          <div
            className="absolute z-10"
            style={{
              width: '437.5px',
              height: '52px',
              opacity: 1,
              top: '105%',
              left: '15%',
              transform: 'translateY(-50%)',
              fontFamily: 'var(--font-kumbh-sans), sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '32px',
              letterSpacing: '0%',
              color: '#A8ADB3',
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'flex-start',
            }}
          >
            Quis autem vel eum iure reprehenderit qui in ea voluptates<br />velit esse quam molestiae consequatur velillum
          </div>
          {/* FAQ Boxes */}
          <div
            className="absolute z-10 flex flex-col gap-2"
            style={{
              top: '140%',
              left: '20%',
              width: '500px',
            }}
          >
            {[
              "Why SEO Growth Business Strategy ?",
              "How We Help Your Projects ?",
              "Why SEO Growth Business Strategy ?"
            ].map((text, index) => (
              <div key={index} style={{ width: '100%' }}>
                <div
                  onClick={() => toggleBox(index)}
                  className="flex items-center justify-between px-4 py-4 cursor-pointer"
                  style={{
                    background: '#292738',
                    borderBottom: '1px solid #2E2D2D',
                    color: '#FFFFFF',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}>
                    {text}
                  </span>
                  <Image
                    src={openIndex === index ? "/arrow down.png" : "/arrow.png"}
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                {openIndex === index && (
                  <div
                    className="px-4 py-4"
                    style={{
                      background: '#232331',
                      fontFamily: 'var(--font-kumbh-sans), sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '32px',
                      letterSpacing: '0%',
                      color: '#FFFFFF',
                    }}
                  >
                    On the other hand denounce with righteous indignation<br />
                    and dislike men who are so beguiled and demoralized by<br />
                    the charms of pleasure of the moment blinded
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Column - FAQ Image */}
      <div className="flex-1 w-1/2 flex items-center">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            width: '701px',
            height: '572px',
            opacity: 1,
          }}
        >
          <Image
            src="/faq.png"
            alt="FAQ section"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Seo;

