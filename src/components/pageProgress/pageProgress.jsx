import './pageProgress.css';
import { useTranslation } from 'react-i18next';

function PageProgress() {
    const { i18n, t } = useTranslation();

    return (
        <div className='pprogress-container mb-20 mt-20'>
            <div className='msje-container shadow-[0_35px_20px_-15px_rgba(1,1,1,0.5)]'>
                <h4 className='msje-tit'>{t("in-progress")}</h4>
            </div>
        </div>
    );
}

export default PageProgress;