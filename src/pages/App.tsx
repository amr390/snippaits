import { Resizable } from 're-resizable'
import { Resizer } from 're-resizable/lib/resizer'
import React, { MouseEventHandler, useState } from 'react'
import '../styles/App.css'

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='flex h-screen'>
      <div className='flex-grow flex flex-col'>
        <NavBar {...{ menuOpen, toggleMenu }} />
        {/* <!-- Contenido principal --> */}
        <SideBar {...{ menuOpen, toggleMenu }} />
        {/*<!-- Contenido de la página -->*/}
        <MainContent />
      </div>
    </div>
  )
}

interface Props {
  children: React.ReactNode
  initializeSize: number
  onResize: Function
}

interface Sizes {
  width: number | string
  height: number | string
}

const MainContent = () => {
  const [sizes, setSizes] = useState<Sizes>({ width: '100%', height: '80%' })

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex p-4 w-full  bg-gray-100' style={{ height: sizes.height }}>
        <input
          type='text'
          placeholder='Introduce el texto aquí'
          className='w-4/5 mx-auto max-h-[8rem] p-4'
        />
      </div>
      <Resizable
        defaultSize={{ ...sizes }}
        onResizeStop={(e, direction, ref, d) => {
          setSizes((prevSizes) => ({
            ...prevSizes,
            ...{
              width: (sizes.width as number) + d.width,
              height: (sizes.height as number) + d.height,
            },
          }))
        }}
      >
        <div className='flex justify-around mx-auto w-4/5 h-full p-4'>
          Response go here
        </div>
      </Resizable>
    </div>
  )
}

const NavBar = (props: {
  toggleMenu: MouseEventHandler<HTMLButtonElement>
  menuOpen: boolean
}) => {
  return (
    <nav className='bg-gray-100 p-4 flex items-center justify-between'>
      <button
        className='flex-shrink-0 text-gray-800 block md:hidden'
        onClick={props.toggleMenu}
        aria-expanded={props.menuOpen}
        aria-controls='menu'
      >
        <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z'
          />
        </svg>
      </button>
      <h1 className='flex-1 text-center text-xl font-bold '>Snippaits</h1>
    </nav>
  )
}

const SideBar = (props: {
  toggleMenu: MouseEventHandler<HTMLButtonElement>
  menuOpen: boolean
}) => {
  return (
    <div
      className={`fixed z-10 top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col justify-between transform transition-transform duration-300 ${
        props.menuOpen ? '' : '-translate-x-full'
      }`}
      id='menu'
    >
      <div className='pt-2 pb-4 pr-4 pl-4'>
        <div className='flex flex-row justify-between'>
          <button
            className='text-white-800 block md:hidden'
            onClick={props.toggleMenu}
            aria-expanded={props.menuOpen}
            aria-controls='menu'
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d='M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z'
              />
            </svg>
          </button>
          <h1 className='text-xl font-bold mb-4'>Menú</h1>
        </div>
        <ul className='list-disc list-inside'>
          <li>
            <a href='#'>Opción 1</a>
          </li>
          <li>
            <a href='#'>Opción 2</a>
          </li>
          <li>
            <a href='#'>Opción 3</a>
          </li>
        </ul>
      </div>
      <div className='p-4'>
        <button className='bg-red-500 text-white py-2 px-4 rounded'>
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default App
