import React from 'react'
import NavLink from './NavLink/NavLink'

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]

    return (
        <div className='flex gap-[10px] desktopSm:gap-[20px]'>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))
            }
        </div>
    )
}

export default Links