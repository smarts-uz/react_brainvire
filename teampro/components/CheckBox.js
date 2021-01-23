import { useState } from "react"

export default function CheckBox({name, inputRef}){
    const [check, setCheck] = useState(false)
    return(
        <span className="m-1">
            <input ref={inputRef} type="checkbox" id={name} name={name} value={name} checked={check} hidden/>
            <label
            for={name}
            onClick={()=>setCheck(!check)}
            className={check === true ? "cursor-pointer select-none bg-blue-600 text-white rounded py-1 px-2 duration-300" : "cursor-pointer select-none bg-gray-300 rounded py-1 px-2 duration-300"}
            >{name}</label>
        </span>
    )
}