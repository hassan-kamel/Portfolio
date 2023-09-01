import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ Section, selectedSection, setSelectedSection }) => {

    const lowerCaseSection = Section.toLowerCase();

    return (
        <AnchorLink
            className={`${selectedSection === lowerCaseSection ? "text-yellow" : ""
                } hover:text-yellow transition duration-500 capitalize`}
            href={`#${lowerCaseSection}`}
            onClick={() => setSelectedSection(lowerCaseSection)}
        >
            {Section}
        </AnchorLink>
    )
}

export default Link