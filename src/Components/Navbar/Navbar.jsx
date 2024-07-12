import Social from "./SocialLinks/Social"

const Navbar = () => {
    return (
        <div className="navContainer py-[10px] ">
            <div className="social">
                <Social />
            </div>
            <div className="logo"></div>
            <div className="links"></div>
        </div>
    )
}

export default Navbar