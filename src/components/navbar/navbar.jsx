import './navbar.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { i18n, t } = useTranslation()

    return(
        <div className='navbar-size'>
            <div id='logo-container'>
                <img id='logo-aworks' src='/images/logo-aworks-full.svg'/>
            </div>
            <div className='navbar-left'>
            <Link to="/">
                <h5 className='navbar-h3 m-0'>{t('home')}</h5>
            </Link>
            <Link to="/projects">
                <h5 className='navbar-h3 m-0'>{t('projects')}</h5>
            </Link>
            <Link to="/about">
                <h5 className='navbar-h3 m-0'>{t('about')}</h5>
            </Link>
            <Link to="/contact">
                <h5 className='navbar-h3 m-0'>{t('contact')}</h5>
            </Link>
            </div>
            <div className='navbar-center'></div>
            <div className='navbar-right'>
            </div>
        </div>
    );
}

export default Navbar;