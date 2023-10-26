import './navbar.css'
import { Link } from 'react-router-dom';
import LangSelector from '../langSelector/langSelector';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { i18n, t } = useTranslation()

    return(
        <div className='navbar-size'>
            <div className='navbar-left'>
            <Link to="/">
                <h3 className='navbar-h3'>{t('home')}</h3>
            </Link>
            <Link to="/works">
                <h3 className='navbar-h3'>{t('works')}</h3>
            </Link>
            <Link to="/about">
                <h3 className='navbar-h3'>{t('about')}</h3>
            </Link>
            </div>
            <div className='navbar-center'></div>
            <div className='navbar-right'>
            <Link to="/">
                <h3 className='navbar-h3'>{t('contact')}</h3>
            </Link>
            <LangSelector/>
            </div>
        </div>
    );
}

export default Navbar;