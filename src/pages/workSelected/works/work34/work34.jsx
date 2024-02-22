import "./work34.css"
import GoProject from "../../../../components/goProject/GoProject";
import PageProgress from "../../../../components/pageProgress/pageProgress";
import { useTranslation } from 'react-i18next';
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES } from "../../../../constants";

function Work34() {
    const { i18n, t } = useTranslation();

    return (
    <>
        <GoProject link='https://anomalyworks.github.io/projects/markdown-previewer/main.html'/>
        <PageProgress/>
        <TechsCard techs={[TECHNOLOGIES.jquery, TECHNOLOGIES.marked]}/>
    </>
    );
}

export default Work34;