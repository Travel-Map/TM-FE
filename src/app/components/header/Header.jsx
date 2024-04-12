import Icon from "/public/header/icon.svg";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="w-auto flex justify-between items-center mx-20 my-8">
        <Link
          href="/"
          className="flex text-3xl text-blue-600 font-bold items-center mr-2"
        >
          <Icon width="24" height="24" className="font-bold" />
          TravelMap
        </Link>

        <div>profile</div>
      </div>
      <hr />
    </>
  );
}
