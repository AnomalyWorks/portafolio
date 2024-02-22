import "./workSelected.css";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { getWork } from "../../api";
import AnimatedPage from "../../AnimatedPage";
import NotFound from "../notFound/notFound";
import Work11 from "./works/work11/work11";
import Work31 from "./works/work31/work31";
import Work32 from "./works/work32/work32";
import Work33 from "./works/work33/work33";
import Work34 from "./works/work34/work34";
import Work35 from "./works/work35/work35";
import Work36 from "./works/work36/work36";
import Work37 from "./works/work37/work37";
import Work12 from "./works/work12/work12";
import BannerWork from "../../components/bannerWork/bannerWork";
import TitleWork from "../../components/titleWork/titleWork";


const WORKS = {
    "11" : <Work11/>,
    "the-state-of-nowhere" : <Work11/>,
    "12" : <Work12/>,
    "31" : <Work31/>,
    "32" : <Work32/>,
    "33" : <Work33/>,
    "34" : <Work34/>,
    "35" : <Work35/>,
    "36" : <Work36/>,
    "37" : <Work37/>,
}

function WorkSelected() {
    const { i18n, t } = useTranslation();
    const id = useParams().id;
    const work = getWork(id);

    return (
        work === null ? 
            <NotFound/>
        :
            <article id="project">
                <AnimatedPage>
                    <TitleWork titulo={t(work.title)}/>
                    <BannerWork idWork={work.id}/>
                    {WORKS[id]}
                </AnimatedPage>
            </article>
            
    );
}

export default WorkSelected;