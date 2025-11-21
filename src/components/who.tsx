import Image from "next/image";

const Who = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl w-full max-w-[1100px] ml-auto mr-0"
      style={{
        aspectRatio: '1250 / 546',
        opacity: 1,
        width: 'min(100%, 1100px)',
        marginLeft: 'auto',
        marginRight: '2rem',
      }}
    >
      <Image
        src="/Section 3.png"
        alt="Section 3"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
};

export default Who;

