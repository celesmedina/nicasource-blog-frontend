import Image from "next/image";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Cards(props: any) {
  return (
    <div className=" relative pt-11 pl-16">
      <div className="h-48 relative ">
        <Image
          className="rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={"http://localhost:1337" + props.imageUrl}
          unoptimized
        />
      </div>

      <p className="font-['Poppins'] mt-1"> {props.author}</p>

      <p className="font-['Domine']  pt-9 text-4xl"> {props.title}</p>

      <div className="flex pt-8">
        <FontAwesomeIcon icon={faHeart} className="pt-1" />
        <p className="rounded-md pb-2 text-balck pl-3">{props.likes}</p>
        <FontAwesomeIcon icon={faHeart} className="pt-1 pl-10" />
        <p className="rounded-md text-black pl-3">{props.views}</p>
      </div>
      {/* <p> {props.tag}</p> */}
    </div>
  );
}
// className={"bg-[url('http://localhost:1337" + props.imageUrl + "')]"}
