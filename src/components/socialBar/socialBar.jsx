import './socialBar.css';
import LangSelector from '../langSelector/langSelector';
import { useTranslation } from 'react-i18next';

function SocialBar() {
    const { i18n, t } = useTranslation()

    return(
        <div id='social-bar-container'>
            <a className=' hover:no-underline' href='https://www.buymeacoffee.com/abel_anomaly' target='blank'>
                <h4 className=' pt-[0.15rem] border rounded border-white hover:text-black hover:bg-white font-["Zector"] font-bold'>{t('support')}</h4>
            </a>
            <LangSelector/>
        </div>
    );
}

export default SocialBar;