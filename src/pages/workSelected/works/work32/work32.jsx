import "./work32.css"
import GoProject from "../../../../components/goProject/GoProject";
import PageProgress from "../../../../components/pageProgress/pageProgress";
import { useTranslation } from 'react-i18next';
import { TECHNOLOGIES } from "../../../../constants";
import TechsCard from "../../../../components/techsCard/techsCard";

function Work32() {
    const { i18n, t } = useTranslation();

    return (
    <>
        <GoProject link='https://anomalyworks.github.io/projects/quote-machine/main.html'/>
        <PageProgress />
        <TechsCard techs={[TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.jquery]}/>
    </>
    );
}

export default Work32;