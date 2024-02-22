import "./aboutMe.css";
import AnimatedPage from "../../AnimatedPage";
import PageTitle from "../../components/pageTitle/pageTitle";
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AboutMe() {
    const { i18n, t } = useTranslation()

    return (
        <section id="about-section">
            <AnimatedPage>
                <article>
                    <PageTitle titulo={t('page-title-3')}/>
                    <div className="general-container mt-5">
                        <img className="general-avatar flex justify-center" src="images/about-me.webp"/>
                            <p>{t("about-p1")}</p>
                            <p>{t("about-p2")}</p>
                            <p>{t("about-p3")}</p>
                            <p>{t("about-p4")}</p>
                            <p>{t("about-p5")}</p>
                            <p><Trans i18nKey={"about-p6"} components={[<Link className="link-p" to={"/projects/games/11"}/>, <Link className="link-p" to={"/projects"}/>]}/></p>
                            <p>{t("about-p7")}</p>
                            <p><Trans i18nKey={"about-p8"} components={[<Link className="link-p" to={"/contact"}/>]}/></p>
                            <p>{t("about-p9")}</p>
                            <p>Abel</p>
                            
                    </div>
                </article>
            </AnimatedPage>
        </section>
    );
}

export default AboutMe;