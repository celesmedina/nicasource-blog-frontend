import Link from "next/link";
import dateFormat, { masks } from "dateformat";

type Post = {
  id: number;
  attributes: {
    image: {
      data: {
        attributes: { url: string };
      };
    };
    title: string;
    tag: string;
    date: Date;
  };
};

type Props = {
  post: Post;
  className: string;
};
export default function FirstPageCards({ post, className }: Props) {
  return (
    <div className={"relative " + className}>
      <Link href={"/blog/" + post.id}>
        <div className="absolute text-white font-['Domine'] pl-5 pt-24 text-2xl">
          <p>{post.attributes.title}</p>
        </div>
      </Link>
      <div className=" absolute  font-['Poppins'] pl-5 pt-5 text-xs">
        <p className="rounded-md p-1 text-black bg-white uppercase">
          {post.attributes.tag}
        </p>
      </div>

      <img
        className="object-cover w-full h-48 rounded-md"
        src={
          process.env.NEXT_PUBLIC_BACKEND_URL +
          post.attributes.image.data.attributes.url
        }
      />

      <div className=" absolute  font-['Poppins'] bottom-3 pl-5 text-sm">
        <p className="rounded-md text-white uppercase">
          {dateFormat(post.attributes.date, "mmm. dd. yyyy")}
        </p>
      </div>
    </div>
  );
}
