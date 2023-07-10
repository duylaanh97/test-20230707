import Image from "next/image";

interface ICardListProps {
  description: string;
  image: string;
  title: string;
  tags: Array<string>;
}

const CardList = ({ description, image, title, tags }: ICardListProps) => {
  return (
    <>
      <div className="relative">
        <Image alt="" src={image} width={234} height={144.47} />
        <div className="absolute bottom-1 left-0 bg-[rgba(255,204,33,1)] px-2 py-1 w-1/2">
          <div className="text-[rgba(255,255,255,1)] text-[15px] leading-[18px] font-normal">
            {description}
          </div>
        </div>
      </div>
      <div className="truncate break-all">
        {title}
        魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
      </div>
      <div className="truncate break-all">
        {tags}#魚料理 #和食 #DHA #魚料理 #和食 #DHA #魚料理 #和食 #DHA #魚料理
        #和食 #DHA
      </div>
    </>
  );
};

export default CardList;
