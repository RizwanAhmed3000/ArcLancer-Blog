"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCirclePlus, CiImageOn, CiVideoOn } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { GoUpload } from "react-icons/go";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WriteBlog = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const { status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <div className='loading'>Loading...</div>
    }

    if (status === 'authenticated') {
        router.push("/")
    }

    return (
        <div className="container flex flex-col gap-[30px] h-[100vh]">
            <input type="text" placeholder="Title" className="w-[100%] bg-transparent text-[58px] outline-none my-[25px] placeholder:text-theme-gray" />
            <div className="editor flex items-center gap-[20px]">
                <button className="hover:text-theme-orange transition duration-150" onClick={() => setOpen(!open)}>
                    <CiCirclePlus size={40} />
                </button>
                {
                    open && (
                        <div className="add flex items-center gap-[18px]">
                            <button className="hover:text-theme-orange transition duration-150">
                                <CiImageOn size={28} />
                            </button>
                            <button className="hover:text-theme-orange transition duration-150">
                                <GoUpload size={28} />
                            </button>
                            <button className="hover:text-theme-orange transition duration-150">
                                <CiVideoOn size={28} />
                            </button>
                        </div>
                    )
                }
            </div>
            <div>
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell Your Story..." />
            </div>
        </div>
    )
}

export default WriteBlog