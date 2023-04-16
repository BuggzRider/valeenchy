import CollapsibleComponent from "components/CollapsibleComponent";
import { collapsibleComponent } from "components/CollapsibleComponent/mock";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valeenchy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CollapsibleComponent
        heading={"A few things you might be wondering"}
        items={collapsibleComponent}
      />
    </>
  );
}
