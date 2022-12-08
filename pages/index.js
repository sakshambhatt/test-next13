import Head from "next/head";
import Image from "next/image";
import { cursive } from "../fonts/fonts";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Testing fonts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-screen">
        <div>
          <h1 className="font-bold text-3xl">Testing fonts. 1, 2, 3...</h1>
          <p className={cursive.className}>Hello, how do I look?</p>
          <p className={`${cursive.className} text-3xl`}>
            Whereas recognition of the inherent dignity
          </p>
        </div>
      </main>
    </div>
  );
}
