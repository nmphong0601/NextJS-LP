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
        className="relative z-0 w-full"
        alt={data.background.alt}
      />
      <div className="absolute inset-0 md:top-1/2 lg:top-1/3 xl:top-1/2 left-12 z-10 md:-translate-y-1/2 lg:-translate-y-1/3 xl:-translate-y-1/2 max-w-[180px]">
        <h3 className="mb-3 font-bold capitalize text-3xl text-black">
          {data.title}
        </h3>
        <p className="block">{data.description}</p>
        {data.button && (
          <a
            href={data.button.url}
            target="_blank"
            className="inline-block mt-3 uppercase bg-nmp-primary hover:bg-nmp-dark p-2 px-5 font-bold text-xs text-white hover:text-white"
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
