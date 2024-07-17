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
        <div className='flex gap-[20px] desktopSm:gap-[10px]'>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))
            }
        </div>
    )
}

export default Links