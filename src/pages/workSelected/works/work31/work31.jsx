import "./work31.css"
import GoProject from "../../../../components/goProject/GoProject";
import PageProgress from "../../../../components/pageProgress/pageProgress";
import { useTranslation } from 'react-i18next';
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES } from "../../../../constants";


function Work31() {
    const { i18n, t } = useTranslation();
    const id = "31"

    return (
    <>
        <GoProject link='https://anomalyworks.github.io/projects/portafolio-example/main.html'/>
        <PageProgress />
        <TechsCard techs={[TECHNOLOGIES.html, TECHNOLOGIES.css]}/>
    </>
    );
}

export default Work31;