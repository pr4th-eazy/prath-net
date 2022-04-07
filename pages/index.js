import Head from "next/head";
import Homepage from '../components/Homepage'
import About from '../components/About'
import Frames from "../components/Frames";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PR4TH</title>
        <meta name="description" content="Connect Prath's store Online!" />
      </Head>
      <Homepage/>
      <About/>
      <Frames/>
    </div>
  );
}
