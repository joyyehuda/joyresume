import { useState, useEffect } from "react";
import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { getPosts, getPortfolios } from "../services";

interface Props {
  posts: [];
  portfolios: [];
}

const Home = ({ posts, portfolios }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isDark && "dark"} select-none`}>
      <div className="dark:bg-slate-900 dark:text-white">
        <Head>
          <title>Joy Lodra</title>
          <link rel="icon" href="/joy.svg" />
        </Head>

        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main className="container mx-auto px-2 py-10 space-y-10 transition-all">
          <HeroBanner />
          <About />
          <Blog posts={posts} />
          <Portfolio portfolios={portfolios} />
          <Contact />
        </main>

        <footer className="p-3 text-center border-t-2 border-black mt-4 dark:border-white">
          joy lodra © 2022 // made with {isDark ? "🤍" : "🖤"}
        </footer>

        {isScrolled && (
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed bottom-1 right-1 opacity-60 cursor-pointer hover:opacity-100 transition duration-300"
          >
            <p className="text-center text-xs">scroll up</p>
            <ArrowUpCircleIcon
              className="animate-fadeIn"
              width={50}
              height={50}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  const portfolios = (await getPortfolios()) || [];

  return {
    props: { posts, portfolios },
    revalidate: 10,
  };
};
