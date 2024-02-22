import './contactCard.css'

function ContactCard(props) {
    return (
        <div id='cc-container'>
            <a id='c-link' href={props.contact.link} target='_blank'>
                <div id="cci-container" className='rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox={props.contact.viewbox}><path fill="currentColor" d={props.contact.d}/></svg>
                    <h5 id='contact-title'>{props.contact.id}</h5>
                </div>
            </a>
        </div>
    );
}

export default ContactCard;