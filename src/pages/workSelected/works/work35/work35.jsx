import "./work35.css"
import GoProject from "../../../../components/goProject/GoProject";
import PageProgress from "../../../../components/pageProgress/pageProgress";
import { useTranslation } from 'react-i18next';
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES } from "../../../../constants";

function Work35() {
    const { i18n, t } = useTranslation();

    return (
    <>
        <GoProject link='https://anomalyworks.github.io/projects/react/calculator/index.html'/>
        <PageProgress />
        <TechsCard techs={[TECHNOLOGIES.react]}/>
    </>
    );
}

export default Work35;