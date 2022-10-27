import Joy from '../assets/joy.png';
import Image
    from 'next/image';
const About = () => {
    return (
        <div id='about' className='gap-10 flex flex-col items-center md:grid md:grid-cols-2 transition-all'>
            <div className='hidden md:inline max-w-sm'>
                <Image className='rounded-full grayscale' src={Joy} alt='entrepreneur' />
            </div>

            <div className='text-left space-y-1'>
                <h1 className='text-xl font-bold'>about me 📚</h1>
                <h1 className='text-2xl font-light italic'>"build, measure, learn"</h1>
                <h1 className='text-2xl font-light italic'>"minimalistic"</h1>
                <h1 className='text-2xl font-light italic'>"deep work"</h1>
                <p>as a tech co-founder, it's important to pick up certain software development skills. the bars below indicate the level of my ability to work with the tools and technologies.</p>

                <div className='flex-col space-y-2 text-right'>
                    <h2 className='font-medium'>HTML & CSS</h2>
                    <div className='w-full bg-white h-2 rounded-md border-2 border-black dark:border-white dark:bg-slate-900'>
                        <div className='w-full bg-black h-1.5 rounded-sm dark:bg-white'></div>
                    </div>
                </div>

                <div className='flex-col space-y-2 text-right'>
                    <h2 className='font-medium'>Javascript</h2>
                    <div className='w-full bg-white h-2 rounded-md border-2 border-black dark:border-white dark:bg-slate-900'>
                        <div className='w-5/6 bg-black h-1.5 rounded-sm dark:bg-white'></div>
                    </div>
                </div>

                <div className='flex-col space-y-2 text-right'>
                    <h2 className='font-medium'>Typescript</h2>
                    <div className='w-full bg-white h-2 rounded-md border-2 border-black dark:border-white dark:bg-slate-900'>
                        <div className='w-4/6 bg-black h-1.5 rounded-sm dark:bg-white'></div>
                    </div>
                </div>

                <div className='flex-col space-y-2 text-right'>
                    <h2 className='font-medium'>React</h2>
                    <div className='w-full bg-white h-2 rounded-md border-2 border-black dark:border-white dark:bg-slate-900'>
                        <div className='w-5/6 bg-black h-1.5 rounded-sm dark:bg-white'></div>
                    </div>
                </div>

                <div className='flex-col space-y-2 text-right'>
                    <h2 className='font-medium'>React Native</h2>
                    <div className='w-full bg-white h-2 rounded-md border-2 border-black dark:border-white dark:bg-slate-900'>
                        <div className='w-4/6 bg-black h-1.5 rounded-sm dark:bg-white'></div>
                    </div>
                </div>

                <div className='flex-col space-y-2 text-right'>
                    <h2 className='font-medium'>Express & Node.js</h2>
                    <div className='w-full bg-white h-2 rounded-md border-2 border-black dark:border-white dark:bg-slate-900'>
                        <div className='w-4/6 bg-black h-1.5 rounded-sm dark:bg-white'></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;