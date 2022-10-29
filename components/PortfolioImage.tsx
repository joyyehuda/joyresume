
interface Props {
    portfolio: any
};

const PortfolioImage = ({ portfolio }: Props) => {
    return (
        <div className='shadow-lg border-black border-2 relative grayscale h-full min-w-[350px] cursor-pointer transition duration-200 hover:scale-95 dark:border-white'>
            <a href={portfolio.link} target='_blank'>
                <img
                    src={portfolio.portofolioImage.url || '/'}
                    className='object-cover h-52 bg-gray-500'
                />
            </a>
        </div>
    )
}

export default PortfolioImage;