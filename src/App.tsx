import Navbar from '@/scenes/navbar'
import { useState, useEffect } from 'react'
import { SelectedPage } from '@/shared/types';
import Home from './scenes/home';
import Benefits from './scenes/benefits';
import { useRef } from 'react'
import { NavigationLinkToLabel } from '@/shared/types';
import OurClasses from './scenes/ourClasses';
import ContactUs from './scenes/contactUs';
import Footer from './scenes/footer';

function App() {
  const pageRefs = useRef<HTMLElement[]>([])
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(!(window.scrollY > 0));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsTopOfPage(!(scrollPosition > 0))

      pageRefs.current.forEach((page) => {
        const {top, bottom} = page.getBoundingClientRect()
        if (scrollPosition >= top && scrollPosition < bottom) {
          const value = SelectedPage[page.id.replace(/#/, '') as keyof typeof SelectedPage]
          setSelectedPage(value)
        }
      })
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} reference={ref => (pageRefs.current[0] = ref)}/>
      <Benefits setSelectedPage={setSelectedPage} reference={ref => (pageRefs.current[1] = ref)}/>
      <OurClasses reference={ref => (pageRefs.current[2] = ref)}/>
      <ContactUs reference={ref => (pageRefs.current[3] = ref)}/>
      <Footer/>
    </div>
  )
}

export default App
