import Image from "next/image";
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
      {/* <p> {props.tag}</p> */}
    </div>
  );
}
// className={"bg-[url('http://localhost:1337" + props.imageUrl + "')]"}
