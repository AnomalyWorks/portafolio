import "./work12.css"
import PageProgress from "../../../../components/pageProgress/pageProgress";
import TechsCard from "../../../../components/techsCard/techsCard";
import { TECHNOLOGIES, CONTACTS } from "../../../../constants";
import GoProject from "../../../../components/goProject/GoProject";

function Work12() {

    return (
    <article className="general-container">
        <GoProject custom={CONTACTS.playtore} link='https://play.google.com/store/apps/details?id=anomaly.works.shapescolors'/>
        <PageProgress />
        <TechsCard techs={[TECHNOLOGIES.godotengine, TECHNOLOGIES.sqlite, TECHNOLOGIES.gimp]} />
    </article>
    );
}

export default Work12;