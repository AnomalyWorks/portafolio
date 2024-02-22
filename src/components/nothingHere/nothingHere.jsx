import './nothingHere.css';
import { useTranslation } from 'react-i18next';

function NothingHere() {
    const { i18n, t } = useTranslation();

    return(
        <div className='noth-container'>
            <h2 id="nothing">{t('nothing-here')}</h2>
        </div>
        
    );
}

export default NothingHere;