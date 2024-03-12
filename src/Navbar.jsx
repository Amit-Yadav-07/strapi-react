import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";




let Navbar = () => {
    let { openSidebar, setPageId } = useGlobalContext();

    let MouseHandler = (e) => {
        if (!e.target.classList.contains('links')) {
            setPageId(null)
        }
    }


    return (
        <nav className="nav-parent" onMouseOver={MouseHandler}>
            <div className="nav-center">
                <h3>Strapi</h3>
                <button onClick={openSidebar} className="toggle-icon"><AiOutlineMenu /></button>
                {/* links */}

                <NavLinks />


            </div>
        </nav>
    )
}


export default Navbar;