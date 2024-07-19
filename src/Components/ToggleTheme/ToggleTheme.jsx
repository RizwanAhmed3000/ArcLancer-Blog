"use client"
import { ThemeContext } from '@/Context/ThemeContext'
import React, { useContext } from 'react'

const ToggleTheme = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    // console.log(theme)

    return (
        <div onClick={toggleTheme} className='cursor-pointer'>{theme}</div>
    )
}

export default ToggleTheme
