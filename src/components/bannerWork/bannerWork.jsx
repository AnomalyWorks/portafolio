import './bannerWork.css'

function BannerWork({ idWork }) {
    return (
        <div className='flex justify-center mb-16'>
            <img className=' rounded-lg shadow-[0_35px_20px_-15px_rgba(1,1,1,0.6)]' src={`/images/works/${idWork}/banner.webp`} alt='banner'/>
        </div>
    )
}

export default BannerWork;