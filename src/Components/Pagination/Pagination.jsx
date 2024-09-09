"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Pagination = ({ page, hasPrev, hasNext }) => {

    const router = useRouter();

    return (
        <div className=' flex items-center justify-between mb-[25px]'>
            <button className='w-[100px] bg-theme-orange rounded hover:bg-theme-orange-dark py-[10px] transition duration-150 text-white disabled:bg-theme-orange-dark disabled:cursor-not-allowed' onClick={() => router.push(`?page=${page - 1}`)} disabled={!hasPrev}>
                Previous
            </button>

            <button className='w-[100px] bg-theme-orange rounded hover:bg-theme-orange-dark py-[10px] transition duration-150 text-white disabled:bg-theme-orange-dark disabled:cursor-not-allowed' onClick={() => router.push(`?page=${page + 1}`)} disabled={!hasNext}>
                Next
            </button>
        </div>
    )
}

export default Pagination