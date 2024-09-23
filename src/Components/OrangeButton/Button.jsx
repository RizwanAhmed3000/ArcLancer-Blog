import React from 'react'

const Button = ({ text, handler }) => {
    return (
        <button className="bg-theme-orange rounded tabletRg:w-[50%] py-3 px-6 hover:bg-theme-orange-dark transition duration-150 text-white" onClick={handler}>
            {text}
        </button>
    )
}

export default Button