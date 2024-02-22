import "./work33.css"
import GoProject from "../../../../components/goProject/GoProject";
import PageProgress from "../../../../components/pageProgress/pageProgress";
import { useTranslation } from 'react-i18next';
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES } from "../../../../constants";

function Work33() {
    const { i18n, t } = useTranslation();

    return (
    <>
        <GoProject link='https://anomalyworks.github.io/projects/drum-machine/main.html'/>
        <PageProgress />
        <TechsCard techs={[TECHNOLOGIES.bootstrap, TECHNOLOGIES.jquery]}/>
    </>
    );
}

export default Work33;