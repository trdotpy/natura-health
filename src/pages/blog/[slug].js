import Layout from "@/layouts/Layout";
import { client } from "lib/contentful/contentfulClient";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Breadcrumb from "@/components/Shared/Breadcrumb";

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "blogPost" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: { post: items[0] },
    revalidate: 30,
  };
}

export default function BlogPostPage({ post }) {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 pt-6 pb-12 sm:px-6 lg:px-8">
        <Breadcrumb page="Blog">{post.fields.title}</Breadcrumb>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
              <div className="flex-shrink-0">
                <Image
                  className="h-12 w-12 rounded-full border-4 border-purple-500"
                  src={
                    `https:` + post.fields.author.fields.image.fields.file.url
                  }
                  height={
                    post.fields.author.fields.image.fields.file.details.image
                      .height
                  }
                  width={
                    post.fields.author.fields.image.fields.file.details.image
                      .width
                  }
                  alt={post.fields.author.fields.image.fields.file.fileName}
                />
              </div>

              <div className="grow">
                <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle block cursor-pointer text-left sm:mb-1">
                        <span className="font-medium text-gray-900">
                          {post.fields.author.fields.name}
                        </span>

                        <div
                          className="hs-tooltip-content divide-neutral invisible absolute z-10 inline-block max-w-xs cursor-default divide-y rounded-xl bg-white opacity-0 shadow-lg transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 "
                          role="tooltip"
                        >
                          <div className="p-4 sm:p-5">
                            <div className="mb-2 flex w-full gap-x-5 sm:items-center sm:gap-x-3">
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-8 w-8 rounded-full border-4 border-purple-500"
                                  src={
                                    `https:` +
                                    post.fields.author.fields.image.fields.file
                                      .url
                                  }
                                  height={
                                    post.fields.author.fields.image.fields.file
                                      .details.image.height
                                  }
                                  width={
                                    post.fields.author.fields.image.fields.file
                                      .details.image.width
                                  }
                                  alt={
                                    post.fields.author.fields.image.fields.file
                                      .fileName
                                  }
                                />
                              </div>

                              <div className="grow">
                                <p className="font-semibold text-gray-900">
                                  {post.fields.author.fields.name}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-800">
                              {post.fields.author.fields.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="text-xs">
                      <li className="relative inline-block pr-6 text-gray-800 before:absolute before:top-1/2 before:right-2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-900 last:pr-0 last-of-type:before:hidden">
                        {post.fields.author.fields.title}
                      </li>
                      <li className="relative inline-block pr-6 text-gray-800 before:absolute before:top-1/2 before:right-2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-900 last:pr-0 last-of-type:before:hidden">
                        {new Date(post.sys.createdAt).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:space-y-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {post.fields.title}
              </h2>
            </div>

            <div className="prose overflow-auto break-words">
              {documentToReactComponents(post.fields.content)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
