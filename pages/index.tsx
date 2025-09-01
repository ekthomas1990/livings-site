import Head from "next/head";
import Site from "@/components/Site";

export default function Home() {
  return (
    <>
      <Head>
        <title>Livings Architecture + Interiors</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Architecture and interiors for people who value clarity, craft, and calm."
        />
      </Head>
      <Site />
    </>
  );
}
