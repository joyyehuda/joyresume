import Card from "./Card";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

interface Props {
  posts: [];
}

const Blog = ({ posts }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div id="blog" className="space-y-3">
      <div className="text-center">
        <h1 className="text-xl font-bold">blog ✍️</h1>
        <p>
          i mostly talk about startup, business, entrepreneurship, and books.
        </p>
      </div>

      <div className="group relative md:-ml-2">
        <ArrowLeftCircleIcon
          className={`absolute top-0 bottom-0 left-2 m-auto z-10
                h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-80`}
          color="black"
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-3 overflow-x-scroll scrollbar-hide p-2"
        >
          {posts.map((post: any) => (
            <Card post={post} key={post.node.id} />
          ))}
        </div>

        <ArrowRightCircleIcon
          className={`absolute top-0 bottom-0 right-2 z-10 m-auto 
                h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-80`}
          onClick={() => handleClick("right")}
          color="black"
        />
      </div>
    </div>
  );
};

export default Blog;
