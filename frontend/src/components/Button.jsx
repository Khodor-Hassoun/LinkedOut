import { useState } from "react";

function Button({text, onClick}){
    return (
        <button className="rounded-lg p-2 text-base bg-green-200 text-black hover:bg-green-400 my-1">
            {text}
        </button>

    )
}
export default Button