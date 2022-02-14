import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const QUERY = gql`
  query Blog($id: ID) {
    blog(id: $id) {
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
export default function PostInternalView() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: id },
    skip: !id,
  });
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

  const post = data?.blog?.data ?? [];

  return (
    <div className="p-24">
      <p className="font-['Domine'] text-2xl pb-5">
        {post.attributes && post.attributes.title}
      </p>
      <Image
        className="rounded-t-lg"
        width={450}
        height={250}
        src={
          post.attributes &&
          process.env.NEXT_PUBLIC_BACKEND_URL +
            post.attributes.image.data.attributes.url
        }
      />
      <p className="font-['Poppins'] pt-5">
        {post.attributes && post.attributes.excerpt}
      </p>
      <p className="font-['Poppins'] pt-10">
        {post.attributes && post.attributes.body}
      </p>
      <div className="pt-5 ">
        <Link href={"/"}>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Return
          </button>
        </Link>
      </div>
    </div>
  );
}
