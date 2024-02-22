import ButtonIco from "../buttonIco/buttonIco";
import InputText from "../inputText/inputText";
import { ICONS_GENERAL, CONTACTS } from "../../constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function MailCard() {
    const [t, i18n] = useTranslation();
    const [msjeCopy, setMsjeCopy] = useState('copy-msje-1')

    const onCopyIcon = () => {
        navigator.clipboard.writeText(CONTACTS.mail.dir)
        .then(()=>{
            document.querySelector(".alert-msje").className += 'visible text-green-500'
            
        }, ()=> {
            setMsjeCopy('copy-msje-2')
            document.querySelector(".alert-msje").className += 'visible text-red-500'
        })
    }

    return (
        <div className="w-full flex justify-center items-center mt-8 mb-8">
            <div className="w-auto border border-dashed border-[var(--bg-color-2)] rounded flex flex-col items-center p-4 pb-0">
                <svg className=" w-16 h-16 text-[var(--font-color-2)]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d={CONTACTS.mail.d}/></svg>
                <h5 className="text-base font-bold font-['Zector'] uppercase text-[var(--font-color-2)]">{CONTACTS.mail.id}</h5>
                <div className="w-full flex justify-center items-center">
                    <InputText texto={CONTACTS.mail.dir} />
                    <ButtonIco link={CONTACTS.mail.link} d={ICONS_GENERAL.send.d}/>
                    <ButtonIco metodo={onCopyIcon} d={ICONS_GENERAL.copy.d}/>
                </div>
                <h5 className="alert-msje text-sm font-['Zector'] uppercase text-[var(--font-color-2)] mt-4 invisible">{t(msjeCopy)}</h5>    
            </div>
        </div>
    )
}

export default MailCard;