import Typewriter from 'typewriter-effect';
import { BackspaceIcon } from '@heroicons/react/24/outline';

const HeroBanner = () => {
    return (
        <div id='#'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='text-xl text-left flex items-center gap-5'>
                    <div>
                        <span className='font-bold text-4xl italic'>
                            <Typewriter
                                options={{
                                    strings: ['startup founder.', 'reader.', 'full-stack dev.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        <p className='font-light'>entrepreneur</p>
                    </div>

                    <BackspaceIcon width={90} height={90} />
                </div>

                <div className='text-right border-2 border-black p-4 space-y-5 shadow-lg dark:border-white'>
                    <h1 className='text-xl font-bold italic'>welcome, my name is joy!</h1>
                    <p>i am currently running an early-phase startup, solving issues in the education sector, with another co-founder. contact me for any business purposes.</p>
                    <div className='mt-5' />
                    <a href='#contact' className='hover:bg-gray-600 bg-black text-white px-4 py-2 font-semibold rounded-lg cursor-pointer dark:bg-white dark:text-slate-900'>contact me</a>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;