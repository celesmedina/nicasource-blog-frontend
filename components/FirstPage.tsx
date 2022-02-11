import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards";
import Image from "next/image";

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
        attributes {
          title
          author
          tag
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
              fill-rule="evenodd"
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
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer col-span-2">
          <div className="absolute px-6 py-4">
            <p>{posts[0].attributes.title}</p>
          </div>
          <img
            className="object-cover w-full h-48 "
            src={
              "http://localhost:1337" +
              posts[0].attributes.image.data.attributes.url
            }
          />
        </div>
        <div className="relative row-span-2">
          <div className="absolute px-6 py-4">
            <p>{posts[1].attributes.title}</p>
          </div>
          <img
            className="object-cover"
            src={
              "http://localhost:1337" +
              posts[1].attributes.image.data.attributes.url
            }
          />
        </div>
        <div className="relative r  row-span-2">
          <div className="absolute px-6 py-4">
            <p>{posts[2].attributes.title}</p>
          </div>
          <img
            className="object-cover"
            src={
              "http://localhost:1337" +
              posts[2].attributes.image.data.attributes.url
            }
          />
        </div>

        <div className="relative  row-span-2">
          <div className="absolute px-6 py-4">
            <p>{posts[3].attributes.title}</p>
          </div>
          <img
            className="object-fill"
            src={
              "http://localhost:1337" +
              posts[3].attributes.image.data.attributes.url
            }
          />
        </div>
        <div className="relative row-span-2">
          <div className="absolute px-6 py-4">
            <p>{posts[4].attributes.title}</p>
          </div>
          <img
            className="object-fill"
            src={
              "http://localhost:1337" +
              posts[4].attributes.image.data.attributes.url
            }
          />
        </div>
        <div className="relative col-span-2">
          <div className="absolute px-6 py-4">
            <p>{posts[5].attributes.title}</p>
          </div>
          <img
            className="object-cover w-full h-48"
            src={
              "http://localhost:1337" +
              posts[5].attributes.image.data.attributes.url
            }
          />
        </div>
      </div>{" "}
      <div className="flex justify-center items-center p-40 ">
        <div className="w-72 h-48 relative">
          {/* <div className="h-48 relative ">
        <Image
          className="rounded-t-lg"
          layout="fill"
          objectFit="cover"
          src={"http://localhost:1337" + props.imageUrl}
          unoptimized
        />
      </div> */}
          <Image
            className="rounded-t-lg"
            layout="fill"
            src={
              "http://localhost:1337" +
              posts[6].attributes.image.data.attributes.url
            }
          />
        </div>
        <div>
          <p className="font-['Domine'] text-5xl">
            {posts[6].attributes.title}
          </p>
          <div>
            <p className="font-['Poppins']">{posts[6].attributes.excerpt}</p>
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
        <div className="relative flex-row p-10">
          <Image
            width={450}
            height={250}
            src={
              "http://localhost:1337" +
              posts[7].attributes.image.data.attributes.url
            }
          />
          <p className="font-['Poppins'] mt-1"> {posts[7].attributes.author}</p>
          <p className="font-['Domine']">{posts[7].attributes.title}</p>
        </div>
        <div className="relative flex-row p-10">
          <Image
            width={450}
            height={250}
            src={
              "http://localhost:1337" +
              posts[8].attributes.image.data.attributes.url
            }
          />
          <p className="font-['Poppins'] mt-1"> {posts[8].attributes.author}</p>
          <p className="font-['Domine']">{posts[8].attributes.title}</p>
        </div>
        <div className="relative flex-row p-10">
          <Image
            width={450}
            height={250}
            src={
              "http://localhost:1337" +
              posts[9].attributes.image.data.attributes.url
            }
          />
          <p className="font-['Poppins'] mt-1"> {posts[9].attributes.author}</p>
          <p className="font-['Domine']">{posts[9].attributes.title}</p>
        </div>
      </div>
    </>
  );
}
