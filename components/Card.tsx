import moment from "moment";

interface Props {
  post: any;
}

const Card = ({ post }: Props) => {
  return (
    <div className="shadow-lg border-2 border-black relative grayscale h-full min-w-[300px] md:hover:scale-95 transition duration-200 dark:border-white">
      <a href={`/post/${post.node.slug}`} className="cursor-pointer">
        <img
          className="object-cover grayscale h-48 w-full"
          src={post.node.blogImage.url}
          alt="Blog Post"
        />

        <div className="p-2 space-y-3">
          <h2 className="text-lg font-bold italic line-clamp-1 lowercase">
            {post.node.title}
          </h2>
          <p className="line-clamp-2 lowercase">{post.node.description}</p>
          <p className="text-sm italic lowercase">
            by {post.node.author.name} •{" "}
            {moment(post.node.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
