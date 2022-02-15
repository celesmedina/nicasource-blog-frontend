import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-10 bg-slate-600 py-14 px-36 ">
      <div className="grid grid-cols-1 pb-12 sm:grid-cols-6  ">
        <div className="text-white font-['Domine']   text-2xl sm:col-span-3">
          No matter what stage you're in, we can support you.
          <p className="font-['Poppins'] text-sm pt-5">
            Questions on how we can?
          </p>
          <p className="font-['Poppins'] text-sm pt-5">Contact us</p>
        </div>
        <div className="sm:col-span-1">
          <p className=" text-white font-bold ">SUPPORT</p>
          <p>
            <Link href="#">
              <a className="block  font-['Poppins'] pt-5 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Courses
              </a>
            </Link>
          </p>

          <p>
            <Link href="#">
              <a className="block  font-['Poppins'] pt-6 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Coaching
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a className="block  font-['Poppins'] pt-6 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Community
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a className="block  font-['Poppins'] pt-6 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Workshops
              </a>
            </Link>
          </p>
        </div>
        <div className="sm:col-span-1">
          <p className=" text-white font-bold ">EXPLORE</p>
          <p>
            <Link href="#">
              <a className="block font-['Poppins'] pt-5 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Join our Team
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a className="block font-['Poppins'] pt-5 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Get Certified
              </a>
            </Link>
          </p>
        </div>

        <div className="sm:col-span-1">
          <p className=" text-white font-bold">PARTNERS</p>
          <p>
            <Link href="#">
              <a className="block font-['Poppins'] pt-5 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Lorem
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a className="block font-['Poppins'] pt-6 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Lorem
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a className="block font-['Poppins'] pt-6 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Lorem
              </a>
            </Link>
          </p>
          <p>
            <Link href="#">
              <a className="block font-['Poppins'] pt-6 text-white lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Lorem
              </a>
            </Link>
          </p>
        </div>
      </div>
      <hr />

      <div className="pt-8 grid grid-cols-1 pb-12 sm:grid-cols-2  ">
        <img src="/logoFooter.svg" />
        <div className="sm:flex">
          <p className="font-['Poppins'] text-white">
            © 2021 | All Rights Reserved
          </p>
          <p className="font-['Poppins'] sm:ml-8 text-white">Privacy Policy</p>
          <p className="font-['Poppins'] sm:ml-8 text-white">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
