import "./work11.css"
import { useTranslation, Trans } from 'react-i18next';
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES, CONTACTS } from "../../../../constants";
import { Link } from 'react-router-dom';
import VideoImg from "../../../../components/videoImg/videoImg";
import GoProject from "../../../../components/goProject/GoProject";


function Work11() {
    const { i18n, t } = useTranslation();

    return (
    <article className="general-container">
        <p>{t("w-11-p-2")}</p>
        <p>{t("w-11-p-3")}</p>
        <VideoImg src="/images/works/11/estacion_1.webm"/>
        <p>{t("w-11-p-4")}</p>
        <VideoImg src="/images/works/11/analisis_1.webm"/>
        <VideoImg src="/images/works/11/analisis_2.webm"/>
        <VideoImg src="/images/works/11/analisis_3.webm"/>
        <VideoImg src="/images/works/11/analisis_4.webm"/>
        <p>{t("w-11-p-5")}</p>
        <VideoImg src="/images/works/11/policia_1.webm"/>
        <p>{t("w-11-p-6")}</p>
        <VideoImg src="/images/works/11/Maligno.webm"/>
        <GoProject custom={CONTACTS.steam} link="https://store.steampowered.com/app/2799170?utm_source=homepage" />
        
        <p><Trans i18nKey={"w-11-p-1"} components={[<Link className="link-p" target="_blank" to={CONTACTS.twitter.link}/>]}/></p>
        
        <TechsCard techs={[TECHNOLOGIES.godotengine, TECHNOLOGIES.sqlite, TECHNOLOGIES.gimp, TECHNOLOGIES.piskel]} />
    </article>
    );
}

export default Work11;