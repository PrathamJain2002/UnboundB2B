import Image from "next/image";

const Growth = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl w-full max-w-[1165.2305px] mx-auto"
      style={{
        aspectRatio: "1165.23046875 / 1051.989501953125",
        opacity: 1,
        width: 'min(100%, 1165.23px)',
      }}
    >
      <Image
        src="/Section 4.png"
        alt="Growth section"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
};

export default Growth;

