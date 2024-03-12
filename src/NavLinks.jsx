import { useGlobalContext } from "./Context"
import { subLinks } from "./data"

let NavLinks = () => {

    let { setPageId } = useGlobalContext();


    return (
        <div className="nav-links">{subLinks.map((link) => {
            return (

                <button type="button" className="links" onMouseEnter={() => setPageId(link.pageId)} key={link.pageId}>{link.page}</button>
            )
        })}</div>
    )
}


export default NavLinks