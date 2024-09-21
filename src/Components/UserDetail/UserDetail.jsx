import Image from 'next/image'
import React from 'react'

const UserDetail = ({type, userData, commentDate}) => {
    // console.log(commentDate.substring(0,10))
    const {image, name} = userData
    const date = commentDate.substring(0, 10)
    return (
        <div className="authorDetail flex gap-[20px] items-center mb-[15px]">
            <div className={`relative rounded-full ${type === 'small' ? "w-[35px] h-[35px]" : "w-[50px] h-[50px]"}`}>
                <Image src={image} className="object-cover rounded-full" fill />
            </div>
            <div>
                <p className={`name text-theme-orange font-semibold  ${type === 'small' ? "text-[15px]" : "text-[18px]"}`}>{name}</p>
                <p className={`date text-theme-gray  ${type === 'small' ? "text-[12px]" : "text-[14px]"}`}>{date}</p>
            </div>
        </div>
    )
}

export default UserDetail