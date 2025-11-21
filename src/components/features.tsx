import Image from "next/image";

const Features = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl w-full max-w-[1290.74px] mx-auto"
      style={{
        aspectRatio: "1290.740234375 / 576",
        opacity: 1,
        width: 'min(100%, 1290.74px)',
      }}
    >
      <Image
        src="/Section 2.png"
        alt="Features section"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
};

export default Features;

