import { Link } from 'react-router-dom';
import './categoryCard.css'
import { useTranslation } from 'react-i18next';

function CategoryCard(props) {
    const { i18n, t } = useTranslation();

    return (
        <div id='catc-container'>
                <Link id='catc-link' to={props.category.link}>
                    <div id="catci-container" className='rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d={props.category.d}/></svg>
                        <h5 className='catc-title'>{t(props.category.id)}</h5>
                    </div>
                </Link>
        </div>
    );
}

export default CategoryCard;