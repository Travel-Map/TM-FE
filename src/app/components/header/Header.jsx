import Icon from "/public/header/icon.svg";

export default function Header() {
  return (
    <div className="w-auto flex justify-between items-center mx-20 my-4">
      <div className="flex text-3xl text-blue-600 font-bold items-center mr-2">
        <Icon width="24" height="24" className="font-bold" />
        TravelMap
      </div>

      <div>profile</div>
    </div>
  );
}
