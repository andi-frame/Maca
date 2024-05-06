import { IoIosArrowBack } from "react-icons/io";

function HeaderBook() {
  return (
    <div className="flex items-center m-3">
      <IoIosArrowBack className="h-[51px] w-[29px]" />
      <span className="text-[25px]">Book Title</span>
    </div>
  );
}

export default HeaderBook;
