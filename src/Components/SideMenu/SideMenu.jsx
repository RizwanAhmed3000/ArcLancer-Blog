import React from 'react'
import SideCard from './SideCard/SideCard'

const SideMenu = () => {
    return (
        <div className='sideMenuContainer flex-[2]'>
            <h2 className='smallTitle text-theme-gray'>{`What's hot`}</h2>
            <h1 className='mainTitle text-[32px] font-bold'>Most Popular</h1>
            <div className="first">
                <SideCard />
                <SideCard />
                <SideCard />
                <SideCard />
            </div>

        </div>
    )
}

export default SideMenu