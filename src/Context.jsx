
import { createContext, useContext, useState } from "react";

let AppContext = createContext();

export let AppProvider = ({ children }) => {
    let [isSidebarOpen, setIsSIdebarOpen] = useState(false);

    let [pageId, setPageId] = useState(null);

    let openSidebar = () => {
        setIsSIdebarOpen(true)
    }

    let closeSidebar = () => {
        setIsSIdebarOpen(false);
    }

    return <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>{children}</AppContext.Provider>
}

export let useGlobalContext = () => {

    return useContext(AppContext);
}