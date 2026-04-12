import Image from "next/image";

export const Setup = () => {
  return (
    <div className="py-3">
      <Image
        src="/images/homelab/homelab.jpeg"
        alt="My homelab setup"
        width={900}
        height={600}
        className="w-full h-auto"
        priority
      />
    </div>
  );
};
