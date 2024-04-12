import BlogData from "@/app/lib/blog.json";
export async function GET() {
  const blogList = BlogData.data.blogs;
  const set = blogList.map((blog) => ({
    id: parseInt(blog.id),
    title: blog.title,
    createdAt: blog.createdAt,
    likedCount: parseInt(blog.likedCount),
    imgUrl: blog.imgUrl,
  }));
  return Response.json({ data: JSON.stringify(set) });
}
