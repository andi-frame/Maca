import Menu from "../components/Menu";
import { GoPerson } from "react-icons/go";

function ProfilePage() {
  const email = "barru.adi@gmail.com";
  const phonenumber = "081234567890";
  const age = "18 tahun";
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <GoPerson className="w-20 h-20" />
        <span className="text-2xl text-[#379A85]">Barru Adi</span>
        <form action="" className="w-8/12 mt-10">
          <div>
            <span className="text-[14px]">Email</span>
            <div className="flex rounded-md ring-1 ring-inset ring-gray-300 w-full">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block flex-1 rounded-md bg-white py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-1 ring-[#D9D9D9] ring-inset focus:ring-3 focus:ring-[#005860]/80 focus:outline-none"
                placeholder="Email address"
                defaultValue={email}
              />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-[14px]">Phone Number</span>
            <div className="flex rounded-md ring-1 ring-inset ring-gray-300 w-full">
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                autoComplete="phonenumber"
                className="block flex-1 rounded-md bg-white ring-1 ring-[#D9D9D9]  py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-inset focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
                placeholder="phonenumber"
                defaultValue={phonenumber}
              />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-[14px]">Age</span>
            <div className="flex rounded-md ring-1 ring-inset ring-gray-300 w-full">
              <input
                type="text"
                name="age"
                id="age"
                autoComplete="age"
                className="block flex-1 rounded-md bg-white ring-1 ring-[#D9D9D9]  py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-inset focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
                placeholder="age"
                defaultValue={age}
              />
            </div>
          </div>

          <div className="mt-3 mb-6">
            <button
              type="submit"
              className="rounded-md bg-[#379A85] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-3/12">
              Edit
            </button>
          </div>
        </form>
      </div>
      <Menu page="profile" />
    </div>
  );
}

export default ProfilePage;
