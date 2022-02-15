import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white px-8 sm:px-36 py-5">
        <div className="w-full block flex-grow flex items-center justify-between w-auto">
          <img src="logo.svg" className="w-1/5" />
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 rounded  "
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className="fill-current h-8 w-8"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="inline-block block lg:hidden text-sm px-7 py-3 leading-none border rounded text-rose-700	 border-rose-700 hover:border-transparent hover:text-teal-500 hover:bg-white "
          >
            Join for Free
          </a>
          <div className="text-sm hidden sm:block">
            <a
              href="#responsive-header"
              className="block mt-4 font-['Poppins'] lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            >
              Courses
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 ml-20 font-['Poppins'] lg:inline-block lg:mt-0  text-black hover:text-white mr-4"
            >
              Coaching
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 4 ml-20  font-['Poppins'] lg:inline-block lg:mt-0  text-black hover:text-white"
            >
              Community
            </a>

            <a
              href="#responsive-header"
              className="block mt-4 4 ml-20  font-['Poppins'] lg:inline-block lg:mt-0  text-black hover:text-white"
            >
              Workshops
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 4 ml-20  font-['Poppins'] lg:inline-block lg:mt-0  text-slate-400	 hover:text-white"
            >
              Login
            </a>

            <a
              href="#"
              className="hidden sm:inline-block  ml-20 text-sm px-4 py-2 leading-none border rounded text-slate-400	 border-slate-400 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Join for Free
            </a>
          </div>
        </div>
        <div
          className={"w-full  flex-grow " + (showMenu ? "" : "hidden")}
          id="nav-mobile"
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 font-['Poppins'] lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
            >
              Courses
            </a>
            <a
              href="#responsive-header"
              className="block mt-4  font-['Poppins'] lg:inline-block lg:mt-0  text-black hover:text-white mr-4"
            >
              Coaching
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 4  font-['Poppins'] lg:inline-block lg:mt-0  text-black hover:text-white"
            >
              Community
            </a>

            <a
              href="#responsive-header"
              className="block mt-4 4   font-['Poppins'] lg:inline-block lg:mt-0  text-black hover:text-white"
            >
              Workshops
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 4 font-['Poppins'] lg:inline-block lg:mt-0  text-slate-400	 hover:text-white"
            >
              Login
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
