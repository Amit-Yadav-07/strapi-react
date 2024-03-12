import { AiOutlineClose } from "react-icons/ai";
import { subLinks } from "./data";
import { useGlobalContext } from "./Context";






let Sidebar = () => {
    let { isSidebarOpen, closeSidebar } = useGlobalContext();
    // console.log(isSidebarOpen);


    return (
        <aside className={isSidebarOpen ? 'aside show-aside' : 'aside'}>
            <div className="sidebar-container">
                <button className="close-btn" onClick={closeSidebar}><AiOutlineClose /></button>

                <div className="sidebar-links">

                    {subLinks.map((item) => {
                        let { pageId, page, link } = item;
                        return (
                            <article key={pageId}>
                                <h5>{page}</h5>
                                <div className="sidebar-sublinks">
                                    {link.map((link) => {
                                        {/* console.log(link) */ }
                                        let { id, icon, label, url } = link;
                                        return (
                                            <a key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }} href={url}> {icon} {label}</a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}


                </div>
            </div>

        </aside>
    )
}

export default Sidebar;