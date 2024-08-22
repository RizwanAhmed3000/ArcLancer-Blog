import React from 'react'

const Pagination = () => {
    return (
        <div className=' flex items-center justify-between mb-[25px]'>
            <button className='w-[100px] bg-theme-orange rounded hover:bg-theme-orange-dark py-[10px] transition duration-150'>Previous</button>
            <button className='w-[100px] bg-theme-orange rounded hover:bg-theme-orange-dark py-[10px] transition duration-150'>Next</button>
        </div>
    )
}

export default Pagination