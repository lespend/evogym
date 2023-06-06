import Navbar from '@/scenes/navbar'
import { useState, useEffect } from 'react'
import { SelectedPage } from '@/shared/types';
import Home from './scenes/home';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(!(window.scrollY > 0))
      setSelectedPage(SelectedPage.home)
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
      <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
