import maca_icon from "../assets/maca_icon.svg";

function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <form action="" className="w-8/12 mt-20">
        <span className="text-[#379A85] text-2xl">Register</span>
        <div>
          <div className="flex rounded-md ring-1 ring-inset ring-gray-300 w-full mt-2">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              className="block flex-1 rounded-md bg-white py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-1 ring-[#D9D9D9] ring-inset focus:ring-3 focus:ring-[#005860]/80 focus:outline-none"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <div className="flex rounded-md ring-1 ring-inset ring-gray-300 w-full mt-2">
            <input
              type="text"
              name="password"
              id="password"
              autoComplete="password"
              className="block flex-1 rounded-md bg-white ring-1 ring-[#D9D9D9]  py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-inset focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <div className="flex rounded-md ring-1 ring-inset ring-gray-300 w-full mt-2">
            <input
              type="text"
              name="ulangi_password"
              id="ulangi_password"
              autoComplete="ulangi_password"
              className="block flex-1 rounded-md bg-white ring-1 ring-[#D9D9D9]  py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-inset focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
              placeholder="Ulangi password"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <span className="text-[12px] leading-6 text-[#AEAEAE] underline underline-offset-1">belum buat akun</span>
        </div>

        <div className="my-5">
          <button
            type="submit"
            className="rounded-md bg-[#379A85] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full">
            Register
          </button>
        </div>
      </form>
      <img src={maca_icon} alt="maca_icon" className="w-20 mt-5" />
    </div>
  );
}

export default RegisterPage;
