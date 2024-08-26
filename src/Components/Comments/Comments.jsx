import Button from "../OrangeButton/Button"
import UserDetail from "../UserDetail/UserDetail"

const Comments = () => {
    const status = `authenticated`
    return (
        <div className='commContainer my-[25px]'>
            <h1 className='text-[32px] font-semibold'>Comments</h1>
            {
                status === 'authenticated' ? (
                    <div className="textArrea flex items-center justify-between gap-[30px] my-[25px]">
                        <textarea name="comment" placeholder="Write a comment" id="" className="p-[10px] w-[100%] bg-transparent"/>
                        <Button text={`Send`} />
                    </div>
                ) : (
                        <div className="textArrea">
                            <p>Login to Comment</p>
                        </div>
                )
            }
            <div className="commentList">
                <div className="comment my-[25px]">
                    <UserDetail type={`small`}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum obcaecati sint aut, incidunt tempora eos accusantium ipsa ad asperiores ea recusandae debitis nobis, doloremque, aspernatur harum modi. Cumque, ut.</p>
                </div>
                <div className="comment my-[25px]">
                    <UserDetail type={`small`}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum obcaecati sint aut, incidunt tempora eos accusantium ipsa ad asperiores ea recusandae debitis nobis, doloremque, aspernatur harum modi. Cumque, ut.</p>
                </div>
                <div className="comment my-[25px]">
                    <UserDetail type={`small`}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum obcaecati sint aut, incidunt tempora eos accusantium ipsa ad asperiores ea recusandae debitis nobis, doloremque, aspernatur harum modi. Cumque, ut.</p>
                </div>
                <div className="comment my-[25px]">
                    <UserDetail type={`small`}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum obcaecati sint aut, incidunt tempora eos accusantium ipsa ad asperiores ea recusandae debitis nobis, doloremque, aspernatur harum modi. Cumque, ut.</p>
                </div>
            </div>
        </div>
    )
}

export default Comments