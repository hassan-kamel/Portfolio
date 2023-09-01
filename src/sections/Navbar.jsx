import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
import { navLinksNames } from "../constants";
import Link from "../components/Link";

const Navbar = ({ isTopOfSection, selectedSection, setSelectedSection }) => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery('(min-width:768px)');
    const navbarBackground = isTopOfSection ? '' : 'bg-red'

    const NavLinks = () => {
        if (isDesktop) return (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                {
                    navLinksNames.map((name) => {
                        return <Link
                            key={name.id}
                            Section={name.text}
                            selectedSection={selectedSection}
                            setSelectedSection={setSelectedSection}
                        />
                    })
                }
            </div>
        )
        else return (
            <button
                className="rounded-full bg-red p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
                <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
        )
    }

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">HK</h4>
                <NavLinks />
                {
                    !isDesktop &&
                    isMenuToggled &&
                    (
                        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-12">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <img alt="close-icon" src="../assets/close-icon.svg" />
                                </button>
                            </div>
                            {/* MENU ITEMS */}
                            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                                {
                                    navLinksNames.map((name) => {
                                        return <Link
                                            key={name.id}
                                            Section={name.text}
                                            selectedSection={selectedSection}
                                            setSelectedSection={setSelectedSection}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar