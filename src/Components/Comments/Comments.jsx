"use client"
import { useSession } from "next-auth/react"
import Button from "../OrangeButton/Button"
import UserDetail from "../UserDetail/UserDetail"
import useSWR from "swr"
import { useState } from "react"

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
        const error = new Error(data.message)
        throw error
    }

    return data
}

const Comments = ({ postId }) => {
    const { status } = useSession()
    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postId=${postId}`, fetcher)
    const isLogin = status === `authenticated` ? true : false
    // console.log(data?.comments)
    const [desc, setDesc] = useState('')

    const handleSubmit = async () => {
        await fetch('http://localhost:3000/api/comments', {
            method: "POST",
            body: JSON.stringify({ desc, postId })
        });
        mutate();
    }
    return (
        <div className='commContainer my-[25px]'>
            <h1 className='text-[32px] font-semibold'>Comments</h1>
            {
                isLogin ? (
                    <div className="textArrea flex items-center justify-between gap-[30px] my-[25px]">
                        <textarea name="comment" placeholder="Write a comment" id="" className="p-[10px] w-[100%] bg-transparent" onChange={e => { setDesc(e.target.value) }} />
                        <Button text={`Send`} handler={handleSubmit} />
                    </div>
                ) : (
                    <div className="textArrea">
                        <p>Login to Comment</p>
                    </div>
                )
            }
            <div className="commentList">
                {
                    isLoading ? "Loading" : data?.comments.map((comment) => (
                        <div className="comment my-[25px]" key={comment.id}>
                            <UserDetail type={`small`} userData={comment.user} commentDate={comment.createdAt} />
                            <p>{comment.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments