import Image from "next/image";
import Link from "next/link";

interface ICardListProps {
  description: string;
  image: string;
  title: string;
  tags: Array<string>;
}

const CardList = ({ description, image, title, tags }: ICardListProps) => {
  return (
    <div className="bg-red-500">
      <div className="relative">
        <Image
          alt=""
          className="w-full object-cover"
          src={image}
          width={234}
          height={144.47}
        />
        <div className="absolute bottom-1 left-0 bg-[rgba(255,204,33,1)] px-2 py-1 w-1/2">
          <div className="text-[rgba(255,255,255,1)] text-[15px] leading-[18px] font-normal">
            {description}
          </div>
        </div>
      </div>
      <div className="break-all line-clamp-2">{title}</div>

      <div className="break-all line-clamp-1">
        {tags.map((item: string, index: number) => {
          return (
            <Link
              className="font-light mr-3 text-fs-12 text-[rgba(255,150,60,1)] no-underline hover:underline"
              href={"/"}
              key={index}
            >
              {`#${item}`}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
