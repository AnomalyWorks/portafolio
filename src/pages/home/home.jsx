import "./home.css";
import PageTitle from "../../components/pageTitle/pageTitle";
import { useTranslation } from 'react-i18next';
import AnimatedPage from "../../AnimatedPage";
import { getWorksFront } from "../../api";
import ImageSlider from "../../components/imageSlider/imageSlider";
import ScrollToAnchor from "../../components/scrollToAnchor/scrollToAnchor";

function Home() {
  const { i18n, t } = useTranslation();
  const worksF = getWorksFront();

  return (
    <section id="home-section" className="flex justify-center items-center flex-col w-full">
      <AnimatedPage>
          <ScrollToAnchor/>
          <PageTitle titulo={t('page-title-1')} />
          <ImageSlider projects={worksF}/>
      </AnimatedPage>
    </section>
  );
}

export default Home;