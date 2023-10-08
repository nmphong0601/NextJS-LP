import styles from "./Index.module.scss";
import Image from "next/image";

const Card = ({ data, className, ...props }) => {
  return (
    <div className={`relative ${className ? className : ""}`} {...props}>
      <Image
        src={data.background.src}
        width={data.background.width}
        height={data.background.height}
        unoptimized
        className="relative z-0 h-auto w-full"
        alt={data.background.alt}
        style={{ objectFit: "cover", minHeight: "240px" }}
      />
      <div className="absolute max-w-[180px] inset-0 flex flex-col justify-center px-2 sm:px-4 md:px-6">
        <h3 className="mb-3 font-bold capitalize text-xl lg:text-3xl text-black">
          {data.title}
        </h3>
        <p className="block">{data.description}</p>
        {data.button && (
          <a
            href={data.button.url}
            target="_blank"
            className="inline-block text-center mt-3 uppercase bg-nmp-primary hover:bg-nmp-dark p-3 px-5 lg:py-4 font-bold text-xs text-white hover:text-white max-w-max"
          >
            {data.button.label}
          </a>
        )}
        {data.price && (
          <div className="text-nmp-primary">
            <strong className="block text-2xl pt-3">{data.price}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
