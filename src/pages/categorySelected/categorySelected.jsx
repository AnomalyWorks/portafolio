import './categorySelected.css';
import { useParams } from "react-router-dom";
import { getWorksCat } from '../../api';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../../AnimatedPage';
import PageTitle from '../../components/pageTitle/pageTitle';
import NothingHere from '../../components/nothingHere/nothingHere';
import ItemsCategory from '../../components/itemsCategory/itemsCategory';


function CategorySelected() {
    const cat = useParams().category;
    const worksCat = getWorksCat(cat);
    const { i18n, t } = useTranslation();

    return (
        <section id='category-selected-section'>
            <AnimatedPage>
                <PageTitle titulo={t(cat+'-w')}/>
                    {Object.keys(worksCat.data).length === 0 ?
                        <NothingHere/>
                    :    
                        <ItemsCategory works={worksCat}/>        
                        
                    }
                
            </AnimatedPage>
        </section>
    );
}

export default CategorySelected;