import "./work37.css"
import GoProject from "../../../../components/goProject/GoProject";
import PageProgress from "../../../../components/pageProgress/pageProgress";
import { useTranslation } from 'react-i18next';
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES } from "../../../../constants";

function Work37() {
    const { i18n, t } = useTranslation();

    return (
    <>
        <GoProject link='https://anomalyworks.github.io/projects/react/portafolio-2'/>
        <PageProgress />
        <TechsCard techs={[TECHNOLOGIES.react, TECHNOLOGIES.bootstrap, TECHNOLOGIES.vite, TECHNOLOGIES.reacti18n, TECHNOLOGIES.reactrouter]}/>
    </>
    );
}

export default Work37;