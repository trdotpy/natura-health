import Layout from "@/layouts/Layout";
import { client } from "lib/contentful/contentfulClient";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "blogPost" });
  return {
    props: {
      posts: res.items,
    },
    revalidate: 30,
  };
}

export default function BlogPage({ posts }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Natura Health Co </title>
      </Head>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10 max-w-4xl text-left lg:mb-14">
          <h2 className="text-3xl text-body sm:text-5xl md:text-6xl">
            The Natura Blog <span className="text-secondary"></span>
          </h2>
          <p className="mt-2 text-body-500 md:text-lg">
            Our healthcare and sustainability experts are here to help you live
            a healthier life.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <div className="group relative block" href="" key={post.id}>
              <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:h-full before:w-full before:bg-gradient-to-t before:from-body-900">
                <Image
                  className="absolute top-0 left-0 h-full w-full object-cover"
                  src={`https:` + post.fields.coverImage.fields.file.url}
                  alt={post.fields.coverImage.fields.file.fileName}
                  height={
                    post.fields.coverImage.fields.file.details.image.height
                  }
                  width={post.fields.coverImage.fields.file.details.image.width}
                />
              </div>

              <div className="absolute inset-x-0 top-0 z-10">
                <div className="flex h-full flex-col p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-[2.875rem] w-[2.875rem] rounded-full border-[3px] border-primary-300"
                        src={
                          `https:` +
                          post.fields.author.fields.image.fields.file.url
                        }
                        height={
                          post.fields.author.fields.image.fields.file.details
                            .image.height
                        }
                        width={
                          post.fields.author.fields.image.fields.file.details
                            .image.width
                        }
                        alt={post.fields.author.fields.name}
                      />
                    </div>
                    <div className="ml-2.5 sm:ml-4">
                      <h4 className="font-medium text-background">
                        {post.fields.author.fields.name}
                      </h4>
                      <p className="text-xs text-body-100">
                        {new Date(post.sys.createdAt).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="flex h-full flex-col p-4 sm:p-6">
                  <h3
                    className="cursor-pointer text-lg font-medium text-background underline-offset-4 hover:underline sm:text-3xl"
                    onClick={() => router.push(`/blog/${post.fields.slug}`)}
                  >
                    {post.fields.title}
                  </h3>
                  <p className="mt-2 text-sm text-body-200">
                    {post.fields.excerpt}
                  </p>

                  <div className="flex justify-end">
                    <button
                      onClick={() => router.push(`/blog/${post.fields.slug}`)}
                      type="button"
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded bg-primary-400 py-2 px-4 align-middle text-sm font-medium text-background shadow-sm hover:bg-primary-500"
                    >
                      Read More
                      <IconArrowRight className="h-auto w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
