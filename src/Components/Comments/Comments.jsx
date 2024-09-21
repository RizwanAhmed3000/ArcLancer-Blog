"use client"
import { useSession } from "next-auth/react"
import Button from "../OrangeButton/Button"
import UserDetail from "../UserDetail/UserDetail"
import useSWR from "swr"

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
    const { data, isLoading } = useSWR(`http://localhost:3000/api/comments?postId=${postId}`, fetcher)
    const isLogin = status === `authenticated` ? true : false
    // console.log(data?.comments)
    return (
        <div className='commContainer my-[25px]'>
            <h1 className='text-[32px] font-semibold'>Comments</h1>
            {
                isLogin ? (
                    <div className="textArrea flex items-center justify-between gap-[30px] my-[25px]">
                        <textarea name="comment" placeholder="Write a comment" id="" className="p-[10px] w-[100%] bg-transparent" />
                        <Button text={`Send`} />
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum obcaecati sint aut, incidunt tempora eos accusantium ipsa ad asperiores ea recusandae debitis nobis, doloremque, aspernatur harum modi. Cumque, ut.</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments