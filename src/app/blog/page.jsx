import Header from "@/app/components/header/Header";
import BlogList from "@/app/components/blog/BlogList";
import WriteButton from "@/app/components/blog/WriteButton";
export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "제주도가 너무 좋은 사람이 쓴 글",
      createdAt: "2024-04-15",
      likedCount: 1,
      imageUrl: "/public/blog/test1.jpeg",
    },
    {
      id: 2,
      title: "먹거리 여행",
      createdAt: "2024-04-14",
      likedCount: 12,
    },
    {
      id: 3,
      title: "세 번째 블로그",
      createdAt: "2024-04-14",
      likedCount: 4,
    },
    {
      id: 4,
      title: "4 번째 블로그",
      createdAt: "2024-04-14",
      likedCount: 12,
    },
    {
      id: 5,
      title: "5 번째 블로그",
      createdAt: "2024-04-14",
      likedCount: 11,
    },
    {
      id: 6,
      title: "6 번째 블로그",
      createdAt: "2024-04-14",
      likedCount: 15,
    },
  ];
  return (
    <div className="w-auto">
      <Header />
      <div className="w-auto mx-20 mt-20 relative">
        <BlogList blogs={blogs} />
        <div className="absolute bottom-0 right-0">
          <WriteButton />
        </div>
      </div>
    </div>
  );
}
