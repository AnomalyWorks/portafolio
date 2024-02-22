import './itemsCategory.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedPage from "../../AnimatedPage";

function ItemsCategory(props) {
    const { i18n, t } = useTranslation();

    return (
        <AnimatedPage>
            <div className='ic-container flex gap-8 flex-wrap justify-center'>
                    {props.works.data.map(( work, idx) => (
                        <Link className='hover:no-underline' to={"./"+work.id} key={idx}>
                            <article className='item-project rounded-lg overflow-hidden max-w-[25rem]'>
                                <div className='state-work rounded'>
                                    <p>{t(work.state)}</p>
                                </div>
                                <div>
                                    <div className='shadow-work'></div>
                                    <img className='img-item aspect-video object-cover' src={`/images/works/${work.id}/thumbnail.webp`} alt={work.alt}/>
                                </div>
                                <div className='text-content h-20 border-t border-white'>
                                    <h3 className='text-center text-md mt-1 mb-1 font-bold font-["Zector"]'>{t(work.title)}</h3>
                                    <p className='text-center text-xs font-["Zector"] pl-3 pr-3'>{t(work.description)}</p>
                                </div>
                            </article>
                        </Link>
                    ))}   
            </div>
        </AnimatedPage>
    );
}

export default ItemsCategory;