import { useEffect, useState } from 'react';
import { LANGUAGES } from '../../constants';

import './langSelector.css'
import i18n from '../../i18n';

function LangSelector() {
    const [selectedLang, setSelectedLang] = useState('en');

    useEffect(() => {
        i18n.changeLanguage(selectedLang)
    }, [selectedLang]);

    return(
        <select  defaultValue={'en'} name="langs" id="langs" onChange={e => setSelectedLang(e.target.value)}>
            {
                LANGUAGES.map(( {code, label}) => (
                    <option
                        key={code}
                        value={code}
                    >{label}</option>
                ))
            }
        </select>
    );
}

export default LangSelector;