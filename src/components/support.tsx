import Image from "next/image";

const Support = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl w-full max-w-[1696px] mx-auto"
      style={{
        aspectRatio: "1696 / 975.72998046875",
        opacity: 1,
        width: 'min(100%, 1696px)',
      }}
    >
      <Image
        src="/Section 8.png"
        alt="Support section"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
};

export default Support;

