import { useRef } from "react";
import { useGlobalContext } from "./Context";
import { subLinks } from "./data";




let SubLinks = () => {

    let { pageId, setPageId } = useGlobalContext();

    let currentPage = subLinks.find((id) => {
        return id.pageId === pageId;
    })

    let submenuContainer = useRef(null);

    let HandleMouseLeave = (e) => {
        let submenu = submenuContainer.current;

        let result = submenu.getBoundingClientRect();
        let { left, right, bottom } = result;


        let { clientX, clientY } = e
        // console.log(clientX, clientY);

        if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {

            setPageId(null)
        }

    }



    return (

        <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={HandleMouseLeave} ref={submenuContainer}>
            <h2>{currentPage?.page}</h2>

            <div className="submenu-links" style={{ gridTemplateColumns: currentPage?.link.length > 3 ? '1fr 1fr' : '1fr' }}>


                {currentPage?.link.map((link) => {
                    let { pageId, icon, url, label } = link;
                    return (
                        <a key={pageId} href={url}><span>{icon}</span>{label}</a>

                    )
                })}

            </div>
        </div>
    )
}


export default SubLinks;