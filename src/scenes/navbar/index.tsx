import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types';
import { useMediaQuery } from '@/hooks/useMediaQuery'
import ActionButton from '@/components/ActionButton'


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const flexBetween = 'flex justify-between items-center'
  const isLargeScreen = useMediaQuery('(min-width: 1100px)')

  return (
    <nav>
      <div className={`${flexBetween} ${isTopOfPage ? '' : 'bg-primary-100 drop-shadow'} fixed top-0 z-30 w-full py-6 font-semibold`}>
        <div className={`${flexBetween} mx-auto w-5/6 gap-16`}>
          <img alt="logo" src={Logo} />
          {/* Навигация */}
          {isLargeScreen ? (
            <div className={`${flexBetween} w-full`}>
              {/* Левая часть */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page={SelectedPage.home} href="#home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page={SelectedPage.benefits} href="#benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page={SelectedPage.ourClasses} href="#ourClasses" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page={SelectedPage.contact} href="#contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>

              {/* Правая часть */}
              <div className={`${flexBetween} gap-8`}>
                <p>Войти</p>
                <ActionButton setSelectedPage={setSelectedPage}>Стать участником</ActionButton>
              </div>
            </div>
          ) : (
            <button
              className='rounded-full bg-secondary-500 p-2'
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <Bars3Icon className='h-6 w-6 text-white' />
            </button>
          )}
        </div>
      </div>

      {/* Мобильная версия навигации */}
      {!isLargeScreen && isMenuActive && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          <button onClick={() => setIsMenuActive(!isMenuActive)} className='block ml-auto mr-12 mt-12'>
            <XMarkIcon className='w-6 h-6 text-gray-400' />
          </button>
          <div className='ml-[20%] mt-12 flex flex-col gap-8 text-2xl'>
            <Link page={SelectedPage.home} href="#home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page={SelectedPage.benefits} href="#benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page={SelectedPage.ourClasses} href="#our-classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page={SelectedPage.contact} href="#contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar