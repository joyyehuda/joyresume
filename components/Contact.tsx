import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    return (
        <div id='contact' className='space-y-3 p-10 border-2 border-black shadow-lg dark:border-white'>
            <div className='text-center'>
                <h1 className='text-xl font-bold'>contact 📱</h1>
                <p>don't hesitate to reach me out. click one of the links below!</p>
            </div>

            <div className='grid md:grid-cols-2 gap-3'>
                <div>
                    <a href='mailto:joylodra@gmail.com' target='_blank' className='cursor-pointer'>
                        <div className='flex justify-center gap-3 items-center p-3 border-2 border-black shadow-lg hover:scale-95 transition duration-200 dark:border-white'>
                            <SiGmail className='w-7 h-7' />
                            <p>gmail</p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href='https://instagram.com/joylodra' target='_blank' className='cursor-pointer'>
                        <div className='flex justify-center gap-3 items-center p-3 border-2 border-black shadow-lg hover:scale-95 transition duration-200 dark:border-white'>
                            <FaInstagram className='w-7 h-7' />
                            <p>instagram</p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href='https://twitter.com/joylodra' target='_blank' className='cursor-pointer'>
                        <div className='flex justify-center gap-3 items-center p-3 border-2 border-black shadow-lg hover:scale-95 transition duration-200 dark:border-white'>
                            <FaTwitter className='w-7 h-7' />
                            <p>twitter</p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href='https://www.youtube.com/c/DSKWShorts' target='_blank' className='cursor-pointer'>
                        <div className='flex justify-center gap-3 items-center p-3 border-2 border-black shadow-lg hover:scale-95 transition duration-200 dark:border-white'>
                            <FaYoutube className='w-7 h-7' />
                            <p>youtube</p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href='https://tiktok.com/@joooyyyyyyyyyy' target='_blank' className='cursor-pointer'>
                        <div className='flex justify-center gap-3 items-center p-3 border-2 border-black shadow-lg hover:scale-95 transition duration-200 dark:border-white'>
                            <FaTiktok className='w-7 h-7' />
                            <p>tiktok</p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href='https://linkedin.com/in/joylodra' target='_blank' className='cursor-pointer'>
                        <div className='flex justify-center gap-3 items-center p-3 border-2 border-black shadow-lg hover:scale-95 transition duration-200 dark:border-white'>
                            <FaLinkedin className='w-7 h-7' />
                            <p>linkedin</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact