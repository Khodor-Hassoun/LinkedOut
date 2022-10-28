
function Input({label,type,name}){
    return (
        <div className="flex flex-col items-start">
            <label htmlFor="input">{label}</label>
            {/* <input type="text" name="input" id="input" className="my-1 rounded-sm "/> */}
            <input type={type} name="input" id="input" className="my-1 rounded-sm p-1"/>
        </div>
    )
}
export default Input