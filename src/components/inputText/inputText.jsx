function InputText(props) {
    return (
    <>
        <input className="w-64 italic h-8 m-1 border pl-2 border-gray-400 rounded cursor-text bg-[var(--bg-color-1)] text-[var(--font-color-2)] text-xs"  type="text" value={props.texto} disabled/>
    </>
    );
}

export default InputText;