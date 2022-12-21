import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zeinab Mohajeri Website</title>
        <meta name="description" content="Zeinab Mohajeri CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.title}>Zeinab Mohajeri</h1>
          <Image
            className={styles.logo}
            src="/bg.webp"
            alt="Zeinab Mohajeri "
            width={1060}
            height={700}
            priority
          />
        </div>
      </main>
    </>
  );
}
