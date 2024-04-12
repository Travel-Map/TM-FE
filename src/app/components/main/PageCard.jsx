import Image from "next/image";
import Map from "/public/main/map.png";
import Blog from "/public/main/blog.png";
export default function PageCard() {
  return (
    <div className="flex w-auto mx-4 my-20 mt-48 justify-center items-center h-full">
      <div className="flex flex-col w-[340px] h-[480px] border border-gray-400 justify-center items-center rounded-full shadow-lg mr-36">
        <div className="mb-20 rounded-full">
          <Image src={Map} alt={"img"} width="160" height="160" />
        </div>
        <div className="text-2xl">나의 여행 지도 보러가기</div>
      </div>
      <div className="flex flex-col w-[340px] h-[480px] border border-gray-400 justify-center items-center rounded-full shadow-lg ml-36">
        <div className="mb-20 rounded-full">
          <Image src={Blog} alt={"blog"} width="160" height="`60`" />
        </div>
        <div className="text-2xl">여행 블로그 보러가기</div>
      </div>
    </div>
  );
}
