export async function GET(request, { params: { id } }) {
  const apiUrl = `http://10.10.140.206:8080/api/post/detail/${id}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const blog = await response.json();
    // 데이터 형식에 맞게 필요한 속성만 선택하여 반환
    return Response.json(blog);
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ message: "Error fetching data" }, { status: 500 });
  }
}
