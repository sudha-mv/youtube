import "../Styles/Navbar.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="logo">
                <img  src="/images/logo.png" alt="" />
            </div>
            <div className="search">
                <input type="search" name="" id="" placeholder="search                                                                          &#128269;" />
            </div>
            <div className="options">
                <button>&#128100;</button>
                <button>sign in</button>
            </div>

        </div>
    )
}
export default Navbar