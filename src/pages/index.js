import Head from "next/head";
import Layout from "@/layouts/Layout";
import Hero from "@/components/Landing/Hero";
import Announcement from "@/components/Landing/Announcement";
import dynamic from "next/dynamic";

const Collections = dynamic(() => import("@/components/Landing/Collections"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Natura Health Co </title>
        <meta
          name="Natura Health Co."
          content="Our commitment to using only the finest natural ingredients, combined with cutting-edge research and eco-conscious practices, sets us apart in the health and wellness industry. We pride ourselves on our transparent and ethical supply chain, ensuring that our products are not only good for our customers, but also for the planet.
					"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Announcement />
        <Layout>
          <Hero />
          <Collections />
        </Layout>
      </main>
    </>
  );
}
