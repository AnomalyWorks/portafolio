import PageTitle from "../../components/pageTitle/pageTitle";
import "./works.css";
import { useTranslation } from 'react-i18next';
import { CATEGORYS } from "../../constants";
import AnimatedPage from "../../AnimatedPage";
import CategoryCard from "../../components/categoryCard/categoryCard";

function Works() {
    const { i18n, t } = useTranslation();

    return (
        <section id="category-section">
            <AnimatedPage>
                <PageTitle titulo={t('page-title-2')} />
                <div className=" flex flex-col gap-3">
                    <CategoryCard category={CATEGORYS.games}/>
                    <CategoryCard category={CATEGORYS.web}/>
                    <CategoryCard category={CATEGORYS.desk}/>
                    <CategoryCard category={CATEGORYS.art}/>
                </div>
            </AnimatedPage>
        </section>
    )
}

export default Works;