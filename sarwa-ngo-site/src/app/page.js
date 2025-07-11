import Hero from "@/components/hero/hero";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";
import Middle from "@/components/middle/middle"
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Middle/>
      <Footer />
    </>
  );
}

