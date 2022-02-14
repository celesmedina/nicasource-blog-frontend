import Image from "next/image";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Cards(props: any) {
  return (
    <div
      className="pl-1
    pt-10 sm:relative sm:pt-11 sm:pl-5 sm:pr-5"
    >
      <div className="h-48 relative ">
        <Image
          className="rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={process.env.NEXT_PUBLIC_BACKEND_URL + props.imageUrl}
          unoptimized
        />
      </div>

      <p className="font-['Poppins'] mt-1"> {props.author}</p>
      <Link href={"/blog/" + props.id}>
        <p className="font-['Domine']  pt-9 text-4xl"> {props.title}</p>
      </Link>
      <div className="flex pt-8">
        <FontAwesomeIcon icon={faHeart} className="pt-1 text-slate-400" />
        <p className="rounded-md pb-2 text-balck pl-3">{props.likes}</p>
        <FontAwesomeIcon icon={faUser} className="pt-1 pl-10 text-slate-400" />
        <p className="rounded-md text-black pl-3">{props.views}</p>
      </div>
      {/* <p> {props.tag}</p> */}
    </div>
  );
}
// className={"bg-[url('process.env.NEXT_PUBLIC_BACKEND_URL" + props.imageUrl + "')]"}
