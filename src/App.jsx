import { useEffect, useState } from 'react'
import Navbar from './sections/Navbar'
import DotGroup from './components/DotGroup';
import useMediaQuery from './hooks/useMediaQuery';



function App() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [isTopSection, setIsTopSection] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopSection(true)
      else setIsTopSection(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">

      <Navbar
        isTopOfSection={isTopSection}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        )}
      </div>

      <div className="min-h-screen " id="home"></div>
      <div className="min-h-screen bg-slate-300" id="skills"></div>
      <div className="min-h-screen" id="projects"></div>
      <div className="min-h-screen bg-neutral-700" id="testimonials"></div>
      <div className="min-h-screen" id="contact"></div>
    </div>
  )
}

export default App
