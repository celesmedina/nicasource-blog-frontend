import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import FirstPageCards from "./FirstPageCards";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import dateFormat, { masks } from "dateformat";

const QUERY = gql`
  query Blogs {
    blogs(pagination: { pageSize: 10, page: 1 }) {
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
      data {
        id
        attributes {
          title
          author
          tag
          views
          likes
          body
          date
          owner {
            data {
              attributes {
                name
                jobTitle
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          excerpt
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function FirstPage() {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return (
      <h2>
        <a
          href="#loading"
          aria-hidden="true"
          className="aal_anchor"
          id="loading"
        >
          <svg
            aria-hidden="true"
            className="aal_svg"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            ></path>
          </svg>
        </a>
        Loading...
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  const posts = data?.blogs?.data ?? [];

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 pt-20 pr-36 pl-36">
        <FirstPageCards
          post={posts[0]}
          className="col-span-2"
          imgClass="w-full h-48"
        />
        <FirstPageCards
          post={posts[1]}
          className="row-span-2"
          imgClass="h-full"
        />
        <FirstPageCards
          post={posts[2]}
          className="row-span-2"
          imgClass="h-full"
        />
        <FirstPageCards
          post={posts[3]}
          className="row-span-2"
          imgClass="h-full"
        />
        <FirstPageCards
          post={posts[4]}
          className="row-span-2"
          imgClass="h-full"
        />
        <FirstPageCards
          post={posts[5]}
          className="col-span-2"
          imgClass="w-full h-48"
        />
      </div>{" "}
      <div className="flex justify-center items-center pt-36 pl-44 pr-44 pb-36">
        <div className="relative">
          <Link href={"/blog/" + posts[6].id}>
            <Image
              className="pr-20 "
              width={450}
              height={350}
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                posts[6].attributes.image.data.attributes.url
              }
            />
          </Link>
          <div className=" absolute  font-['Poppins'] pl-5 pt-5 top-1 uppercase text-xs">
            <p className="rounded-md p-1 text-black bg-white uppercase">
              {posts[6].attributes.tag}
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className="absolute bottom-7 pl-5 text-white	"
            />

            <p className="absolute bottom-2	rounded-md pl-10 pb-4 text-white">
              {posts[6].attributes.likes}
            </p>
            <FontAwesomeIcon
              icon={faUser}
              className="absolute bottom-7 pl-24 text-white	"
            />
            <p className="absolute bottom-2	rounded-md pl-28  pb-4 text-white">
              {posts[6].attributes.views}
            </p>
          </div>
        </div>
        <div className="pl-5">
          <Link href={"/blog/" + posts[6].id}>
            <p className="font-['Domine'] text-5xl ">
              {posts[6].attributes.title}
            </p>
          </Link>
          <div>
            <p className="font-['Poppins'] pt-2">
              {posts[6].attributes.excerpt}
            </p>
          </div>
          <div className="pt-3 flex">
            <Link href={"/blog/" + posts[6].id}>
              <Image
                className="rounded-full"
                width={43}
                height={40}
                src={
                  process.env.NEXT_PUBLIC_BACKEND_URL +
                  posts[6].attributes.owner.data.attributes.picture.data
                    .attributes.url
                }
              />
            </Link>
            <p className="font-['Poppins'] pl-5 pt-2">
              {" "}
              {posts[6].attributes.owner.data.attributes.name},
              {posts[6].attributes.owner.data.attributes.jobTitle}
            </p>
          </div>
        </div>
      </div>
      <div></div>
      {/* {posts.map((post: any) => (
        <Cards
          title={post.attributes.title}
          author={post.attributes.author}
          tag={post.attributes.tag}
          imageUrl={post.attributes.image.data.attributes.url}
        />
      ))} */}
      <div className="flex">
        <div className=" flex-row pl-36">
          <Link href={"/blog/" + posts[7].id}>
            <Image
              className="rounded-t-lg relative"
              width={450}
              height={250}
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                posts[7].attributes.image.data.attributes.url
              }
            />
          </Link>
          <p className="font-['Poppins'] mt-1"> {posts[7].attributes.author}</p>
          <Link href={"/blog/" + posts[7].id}>
            <p className="font-['Domine'] pt-7 text-2xl">
              {posts[7].attributes.title}
            </p>
          </Link>
          <div className="flex pt-8">
            <FontAwesomeIcon icon={faHeart} className="pt-1 text-slate-400" />
            <p className="rounded-md pb-2 text-balck pl-3">
              {posts[7].attributes.likes}
            </p>
            <FontAwesomeIcon
              icon={faUser}
              className="pt-1 pl-10 text-slate-400"
            />
            <p className="rounded-md text-black pl-3">
              {posts[7].attributes.views}
            </p>
          </div>
        </div>
        <div className="relative flex-row pl-10 pr-10">
          <Link href={"/blog/" + posts[8].id}>
            <Image
              className="rounded-t-lg"
              width={450}
              height={250}
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                posts[8].attributes.image.data.attributes.url
              }
            />
          </Link>
          <p className="font-['Poppins'] mt-1"> {posts[8].attributes.author}</p>
          <Link href={"/blog/" + posts[8].id}>
            <p className="font-['Domine'] pt-7 text-2xl">
              {posts[8].attributes.title}
            </p>
          </Link>
          <div className="flex pt-8">
            <FontAwesomeIcon icon={faHeart} className="pt-1 text-slate-400" />
            <p className="rounded-md pb-2  pl-3">{posts[8].attributes.likes}</p>
            <FontAwesomeIcon
              icon={faUser}
              className="pt-1 pl-10 text-slate-400"
            />
            <p className="rounded-md  pl-3">{posts[8].attributes.views}</p>
          </div>
        </div>
        <div className="relative flex-row pr-36">
          <Link href={"/blog/" + posts[9].id}>
            <Image
              className="rounded-t-lg"
              width={450}
              height={250}
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                posts[9].attributes.image.data.attributes.url
              }
            />
          </Link>
          <p className="font-['Poppins'] mt-1"> {posts[9].attributes.author}</p>
          <Link href={"/blog/" + posts[9].id}>
            <p className="font-['Domine'] pt-7 text-2xl">
              {posts[9].attributes.title}
            </p>
          </Link>
          <div className="flex pt-8">
            <FontAwesomeIcon icon={faHeart} className="pt-1 text-slate-400" />
            <p className="rounded-md pb-2 text-balck pl-3">
              {posts[9].attributes.likes}
            </p>
            <FontAwesomeIcon
              icon={faUser}
              className="pt-1 pl-10 text-slate-400"
            />
            <p className="rounded-md text-black pl-3">
              {posts[9].attributes.views}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
