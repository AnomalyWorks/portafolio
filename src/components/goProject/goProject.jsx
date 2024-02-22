import './goProject.css';
import { useTranslation } from 'react-i18next';

function GoProject(props) {
    const { i18n, t } = useTranslation();

    return(
        <div className='gp-container mt-8 mb-8'>
            <a className="gp-link" href={props.link} target='blank'>
                <div className='gp-button flex flex-col'>
                {
                    props.custom === undefined ? 
                    <></> 
                    :
                    <div className='flex flex-col items-center mb-3'>
                        <svg className='mt-2 mb-4' xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox={props.custom.viewbox}><path fill="currentColor" d={props.custom.d}/></svg>
                        <h5 id='contact-title'>{props.custom.id}</h5>
                    </div>
                }
                    <h4 className='gp-title'>{t('go-project')}</h4>
                </div>
            </a>
        </div>
    );
}

export default GoProject;