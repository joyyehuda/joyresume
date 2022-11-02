import { useEffect, useState } from "react";
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import { getPosts, getPostDetails } from "../../services";
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import moment from 'moment';

interface Props {
    params: any,
    post: any
};

const PostDetails = ({ post }: Props) => {
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isDark && 'dark'} select-none`}>
            <div className='dark:bg-slate-900 dark:text-white'>
                <Head>
                    <title>Joy Lodra</title>
                    <link rel='icon' href='/joy.svg' />
                </Head>

                <Navbar isDark={isDark} setIsDark={setIsDark} />

                <article className='container mx-auto px-2 py-10 space-y-5 transition-all'>
                    <img src={post.blogImage?.url || 'https://media.graphassets.com/cNtqk0JBRSigm3YqBsCA'} className='w-full shadow-lg h-40 md:h-60 lg:h-80 object-cover grayscale bg-gray-300 transition-all border-2 border-black' />
                    <div className='border-b-2 border-black dark:border-white'>
                        <h1 className='text-3xl font-bold lowercase'>{post.title}</h1>
                        <p className='italic lowercase mb-3'>by {post.author.name} • {moment(post.createdAt).format('MMM DD, YYYY')}</p>
                    </div>
                    <div className='space-y-5 blogContent' dangerouslySetInnerHTML={{ __html: post.content.html }} />
                </article>

                <footer className='p-3 text-center border-t-2 border-black mt-4 dark:border-white'>
                    joy lodra © 2022 // made with {isDark ? '🤍' : '🖤'}
                </footer>

                {isScrolled &&
                    <div
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className='fixed bottom-1 right-1 opacity-60 cursor-pointer hover:opacity-100 transition duration-300'
                    >
                        <p className='text-center text-xs'>scroll up</p>
                        <ArrowUpCircleIcon className='animate-fadeIn' width={50} height={50} />
                    </div>
                }
            </div>
        </div>
    )
}

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }: Props) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        }
    };
};

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map((post: any) => ({ params: { slug: post.node.slug } })),
        fallback: true,
    };
}