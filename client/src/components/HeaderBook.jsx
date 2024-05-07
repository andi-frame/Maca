import { IoIosArrowBack } from "react-icons/io";

function HeaderBook({ title }) {
  return (
    <div className="flex items-center m-2">
      <IoIosArrowBack className="h-[51px] w-[29px]" />
      <span className="text-[25px]">{title}</span>
    </div>
  );
}

export default HeaderBook;
