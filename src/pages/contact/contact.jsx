import PageTitle from '../../components/pageTitle/pageTitle';
import './contact.css'
import { useTranslation } from 'react-i18next';
import { CONTACTS } from '../../constants';
import ContactCard from '../../components/contactCard/contactCard';
import AnimatedPage from '../../AnimatedPage';
import MailCard from '../../components/mailCard/mailCard';


function Contact() {
    const { i18n, t } = useTranslation()

    return(
        <section id='contact-section'>
            <AnimatedPage>
                <PageTitle titulo={t('page-title-4')}/>
                <div className='contact-container flex flex-wrap gap-4 justify-center pl-2 pr-2 md:pl-72 md:pr-72'>
                    
                    <ContactCard contact={CONTACTS.twitter}/>
                    <ContactCard contact={CONTACTS.youtube}/>
                    <ContactCard contact={CONTACTS.playtore}/>
                    <ContactCard contact={CONTACTS.steam}/>
                    <ContactCard contact={CONTACTS.discord}/>

                    
                    {/* 
                    <ContactCard contact={CONTACTS.patreon}/>
                    <ContactCard contact={CONTACTS.reddit}/>
                    <ContactCard contact={CONTACTS.facebook}/>
                    <ContactCard contact={CONTACTS.instagram}/>
                    <ContactCard contact={CONTACTS.linkedin}/>
                    <ContactCard contact={CONTACTS.github}/>
                    <ContactCard contact={CONTACTS.tiktok}/>
                    */
                    }
                </div>
                <MailCard/>

            </AnimatedPage>
        </section>
    );
}

export default Contact;