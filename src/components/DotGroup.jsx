import React from 'react'
import { navLinksNames } from '../constants'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({ selectedSection, setSelectedSection }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            {
                navLinksNames.map((name) => {
                    const lowerCaseSection = name.text.toLowerCase();
                    return <AnchorLink
                        key={name.id}
                        className={`${selectedSection === lowerCaseSection ? selectedStyles : "bg-dark-grey"
                            } w-3 h-3 rounded-full`}
                        href={`#${lowerCaseSection}`}
                        onClick={() => setSelectedSection(lowerCaseSection)}
                    />
                })
            }
        </div>
    )
}

export default DotGroup