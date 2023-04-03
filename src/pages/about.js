import Mission from "@/components/About/Mission";
import Stats from "@/components/About/Stats";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";

const Steps = dynamic(() => import("../components/About/Steps"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Natura Health Co </title>
      </Head>
      <div className="min-h-screen">
        <Mission />
        <Stats />
      </div>
      <div className="min-h-screen">
        <Steps />
      </div>
    </Layout>
  );
}
