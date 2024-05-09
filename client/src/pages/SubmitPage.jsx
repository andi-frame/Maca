import HeaderBook from "../components/HeaderBook";
import { useLocation } from "react-router-dom";

function SubmitPage() {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <div className="w-full h-20 bg-gradient-to-b from-[#5EB07B]/85 to[#737373] -z-10 absolute top-0"></div>
      <HeaderBook title="Create Your Book" location={location} />
      <div className="w-11/12 h-[0.1px] mx-auto mb-1 bg-black opacity-50 m-auto"></div>

      <form className="ml-8 mt-5">
        <div>
          <label htmlFor="title" className="text-md">
            Title
          </label>
          <div className="flex rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 w-10/12 mt-2">
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="title"
              className="block flex-1 rounded-sm bg-[#ECECEC]  py-2 px-3 text-gray-900 placeholder:text-gray-400 ring-inset focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
              placeholder="Book Title"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="author" className="text-md">
            Author
          </label>
          <div className="flex rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 w-10/12 mt-2">
            <input
              type="text"
              name="author"
              id="author"
              autoComplete="author"
              className="block flex-1 rounded-sm bg-[#ECECEC]  py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
              placeholder="Book Author"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="genre" className="text-md">
            Genre
          </label>
          <div className="mt-2">
            <select
              id="genre"
              name="genre"
              autoComplete="genre"
              className="block w-10/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 focus:ring-2 focus:ring-[#005860]/80 focus:outline-none">
              <option>Action</option>
              <option>Science</option>
              <option>Fable</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="description" className="text-md">
            Description
          </label>
          <div className="flex rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 w-10/12 mt-2">
            <textarea
              type="text"
              name="description"
              id="description"
              rows={4}
              className="block flex-1 rounded-sm bg-[#ECECEC]  py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005860]/80 focus:outline-none"
              placeholder="Book Description"></textarea>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="bookfile">Upload Book</label>
          <div className="mt-2 rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-10/12">
            <div className="flex text-sm leading-6 text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-[#379A85]">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
          </div>
        </div>

        <div className="my-6">
          <button
            type="submit"
            className="rounded-md bg-[#379A85] px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitPage;
