// components/Countries.js

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Cards from "./Cards";
import FirstPage from "./FirstPage";
import FirstPageMobile from "./FirstPageMobile";
import { useMediaQuery } from "react-responsive";
import PostInternalView from "../pages/blog/[id]";

const QUERY = gql`
  query Blogs($pageSize: Int, $page: Int) {
    blogs(pagination: { pageSize: $pageSize, page: $page }) {
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

type Post = {
  title: string;
  author: string;
  tag: string;
};
type BlogData = {
  blogs: {
    data: Post;
  };
};

export default function Blog() {
  let [page, setPage] = useState(1);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  function handleOnClick(e: any) {
    setPage(Number(e.target.value));
  }

  const pageSize = isDesktopOrLaptop ? 9 : 5;
  function handleOnClickPrevious(e: any) {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  }
  function handleOnClickNext(e: any) {
    setPage(page + 1);
  }

  const { data, loading, error, fetchMore } = useQuery(QUERY, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
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

  const posts = data?.blogs?.data ?? [];

  return (
    <div>
      <div>
        {page === 1 && (isTabletOrMobile ? <FirstPageMobile /> : <FirstPage />)}

        <div className=" pl-4 pr-4 pt-24 sm:grid grid-cols-3 grid-rows-3 sm:pr-36 sm:pl-36 ">
          {" "}
          {page > 1 &&
            posts.map((post: any) => (
              <Cards
                key={post.attributes.id}
                id={post.id}
                title={post.attributes.title}
                author={post.attributes.author}
                tag={post.attributes.tag}
                likes={post.attributes.likes}
                views={post.attributes.views}
                imageUrl={post.attributes.image.data.attributes.url}
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="text-center pt-20	">
          <nav>
            <ul className="inline-flex	">
              <li>
                <button
                  className="h-10 px-5  transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                  onClick={handleOnClickPrevious}
                >
                  Previous
                </button>
                {Array.from(
                  Array(data.blogs.meta.pagination.pageCount).keys()
                ).map((number) => (
                  <button
                    key={number}
                    className="h-10 px-5  transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                    onClick={handleOnClick}
                    value={number + 1}
                  >
                    {number + 1}
                  </button>
                ))}

                <button
                  className="h-10 px-5  transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                  onClick={handleOnClickNext}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
