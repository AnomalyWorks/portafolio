import './buttonIco.css'
function ButtonIco(props){
    return (
        <a href={props.link} target={props.target}>
            <div onClick={props.metodo} className="butt-ico m-1 rounded w-fit">
                <svg className="w-8 h-8 p-1 cursor-pointer text-[var(--font-color-2)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d={props.d}/></svg>
            </div>
        </a>
    )
}

export default ButtonIco;