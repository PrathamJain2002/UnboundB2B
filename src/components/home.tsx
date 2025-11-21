import Image from "next/image";
import Header from "./header";

const HomePage = () => {
  return (
    <div 
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000A1F 0%, #000C2F 63.16%)',
      }}
    >
      {/* Grid Image - Starts from top, covers home component only */}
      <div 
        className="absolute left-0 right-0 top-0 w-full pointer-events-none"
        style={{
          height: '904px',
          maxHeight: '100%',
          zIndex: 1,
          opacity: 1,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/Grid.png"
            alt="Grid"
            width={1920}
            height={904}
            className="object-cover w-full h-full"
            style={{
              opacity: 1,
            }}
            priority
          />
        </div>
      </div>

      {/* Vector Image - At bottom, above Grid */}
      <div 
        className="absolute left-0 right-0 bottom-0 w-full pointer-events-none"
        style={{
          height: '50%',
          zIndex: 2,
          opacity: 1,
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/Vector 1.png"
            alt="Vector"
            width={1920}
            height={740}
            className="object-cover w-full h-full"
            style={{
              opacity: 1,
            }}
            priority
          />
        </div>
      </div>

      {/* Background Image - Below Grid */}
      <div 
        className="absolute left-0 right-0 w-full pointer-events-none top-16 md:top-20 lg:top-24"
        style={{
          height: '490px',
          zIndex: 0,
        }}
      >
        <div className="relative w-full h-full max-w-[1422px] mx-auto">
          <Image
            src="/Image Background.png"
            alt="Background"
            fill
            className="object-cover"
            style={{
              opacity: 1,
            }}
            priority
          />
        </div>
      </div>

      {/* Header - Above Grid and Background */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Main Content - Above everything */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-12">
          {/* First Row - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* First Column - Text */}
            <div className="order-2 lg:order-1 flex flex-col justify-start relative">
              <div className="relative inline-block">
                <h1
                  className="text-white leading-tight"
                  style={{
                    fontFamily: "var(--font-jost), Jost, sans-serif",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "clamp(32px, 5vw, 75px)",
                    lineHeight: "clamp(32px, 5vw, 75px)",
                    letterSpacing: "-0.75px",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                  }}
                >
                  We Provide
                  <br />
                  Smart Business
                  <br />
                  Solutions
                </h1>
                <p
                  className="text-white mt-4"
                  style={{
                    fontFamily: "var(--font-jost), Jost, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "30px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "#FFFFFF",
                  }}
                >
                  Grow your Business With Us Best Business Solutions
                </p>
                <div 
                  className="absolute top-0"
                  style={{ 
                    width: '206px', 
                    height: '214px',
                    left: 'calc(50% + 10px)',
                    marginLeft: '10px',
                    transform: 'translateY(-35%)',
                  }}
                >
                  <Image
                    src="/object-4.png"
                    alt="Lightbulb"
                    width={206}
                    height={214}
                    className="object-contain w-full h-full"
                    style={{
                      opacity: 1,
                    }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Second Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
              <div
                className="relative w-full"
                style={{
                  maxWidth: "780px",
                  aspectRatio: "780 / 686",
                }}
              >
                <Image
                  src="/Image Forground.png"
                  alt="Business Solutions"
                  fill
                  priority
                  className="object-contain"
                  style={{
                    opacity: 1,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Second Row - Partener Image */}
          <div className="flex justify-center w-full">
            <div
              className="relative"
              style={{
                width: '100%',
                maxWidth: '1170px',
                height: '295px',
              }}
            >
              <Image
                src="/Partener.png"
                alt="Partners"
                fill
                className="object-contain"
                style={{
                  opacity: 1,
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

