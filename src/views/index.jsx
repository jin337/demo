import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const menu = [
  {
    name: 'Flexbox',
    link: '/flexbox',
  },
  {
    name: 'Triangle',
    link: '/triangle',
  },
]

const Home = () => {
  const location = useLocation()
  const [active, setActive] = useState()

  useEffect(() => {
    setActive(location.pathname)
  }, [location])

  return (
    <div className='box-border flex h-screen p-4'>
      <div className='flex h-full w-[200px] flex-col py-7'>
        {menu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`mb-1 rounded-s-lg px-4 py-2.5 hover:bg-white ${item.link === active ? 'bg-white' : ''}`}>
            {item.name}
          </a>
        ))}
      </div>
      <div className='content w-[calc(100%-200px)] overflow-y-auto bg-white p-3'>
        <Outlet />
      </div>
    </div>
  )
}
export default Home
