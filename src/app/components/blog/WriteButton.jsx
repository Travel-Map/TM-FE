import Pencil from "/public/blog/pencil.svg";
import Link from "next/link";
export default function WriteButton() {
  return (
    <Link href="/write">
      <Pencil
        width="20"
        height="20"
        className="w-20 h-20 bg-blue-500 rounded-full shadow-md hover:bg-blue-700"
      />
    </Link>
  );
}
