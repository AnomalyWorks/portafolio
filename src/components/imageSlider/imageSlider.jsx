import './imageSlider.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ImageSlider({ projects }) {
    const { i18n, t } = useTranslation()
    const [actualWork, setActualWork] = useState(projects[0])

    const onChangeWork = (work) => {
        setActualWork(work)
    }

    return (
        <section className='p-8 pt-0 pb-0'>
            <div className='slider-wrap relative'>
                <div className='slide flex aspect-video overflow-x-hidden scroll-smooth rounded-lg shadow-[0_35px_60px_-15px_rgba(1,1,1)]'>
                    {
                        projects.map((project) => (
                            <img key={project.id} className='flex-[1_0_100%] object-cover ' id={project.id} src={`images/works/${project.id}/thumbnail.webp`} alt={project.alt}/>
                        ))

                    }
                </div>
                <div className='flex gap-x-4 absolute bottom-5 left-1/2 translate-x-[-50%] z-10'>
                    {

                        projects.map((project) => (
                            <a onClick={()=> onChangeWork(project)} key={project.id} className='w-4 h-4 rounded-[50%] bg-white opacity-75 transition-opacity hover:opacity-100' href={`#${project.id}`}></a>
                        ))

                    }
                </div>
            </div>
            <div className=' mt-4 relative z-20 text-center flex flex-col items-center'>
                <h3 className='px-3 w-fit font-["Zector"] font-bold text-white uppercase'>{`-- ${t(actualWork.title)} --`}</h3>
                <p className='mt-2 mb-2 font-["Zector"] text-white font-thin text-xs'>{t(actualWork.description)}</p>
                <div className='paths flex gap-4 items-center flex-wrap justify-center'>
                <Link className=' hover:no-underline' to={`/the-state-of-nowhere`}>
                    <h3 className='text-xs btn-h3 pl-3 pr-3 border rounded uppercase'>{t("v-description")}</h3>
                </Link>
                <Link target='blank' className=' hover:no-underline' to="https://www.youtube.com/watch?v=ExE6LeX_tiM">
                    <h3 className='text-xs btn-h3 pl-3 pr-3 border rounded uppercase'>gameplay trailer</h3>
                </Link>
                <Link target='blank' className=' hover:no-underline' to="https://twitter.com/abel_anomaly">
                    <h3 className='text-xs btn-h3 pl-3 pr-3 border rounded uppercase'>{t("news")}</h3>
                </Link>
                <Link target='blank' className=' hover:no-underline' to="https://store.steampowered.com/app/2799170?utm_source=homepage">
                    <h3 className='text-xs btn-h3 pl-3 pr-3 border rounded uppercase'>steam page!</h3>
                </Link>
                
                <h3 className='text-xs text-white uppercase font-["Zector"] font-extrabold'>{"wishlist now!"}</h3>
                </div>
                
            </div>
            
        </section>
    );
}

export default ImageSlider;