import Image from "next/image";

const Fact = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl w-full max-w-[1038px] mx-auto"
      style={{
        aspectRatio: "1038.001220703125 / 662.7716064453125",
        opacity: 1,
        width: 'min(100%, 1038px)',
      }}
    >
      <Image
        src="/Section 7.png"
        alt="Fact section"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
};

export default Fact;

