import AnimatedPage from "../../AnimatedPage";
import PageTitle from "../../components/pageTitle/pageTitle";
import "./notFound.css";
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { i18n, t } = useTranslation()
    
    return (
        <section id="not-found-section">
            <AnimatedPage>
                <div id="notfound-container">
                    <PageTitle titulo={t('page-title-5')} />
                </div>
            </AnimatedPage>
        </section>
    );
}

export default NotFound;