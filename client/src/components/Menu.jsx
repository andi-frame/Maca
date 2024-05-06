import { CgSandClock } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

function Menu() {
  return (
    <div className="h-16">
      <div className="bg-[#00717B] w-auto h-16 fixed bottom-0 left-0 right-0 flex justify-around items-center">
        <div className="flex flex-col items-center justify-center">
          <CgSandClock className="h-9 w-9" />
          <span className="text-xs text-white">Activity</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <IoIosSearch className="h-10 w-10" />
          <span className="text-xs text-white">Search</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <VscAccount className="h-9 w-9" />
          <span className="text-xs text-white">Account</span>
        </div>
      </div>
    </div>
  );
}
export default Menu;
