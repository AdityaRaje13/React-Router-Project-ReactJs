import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <>
        <div className="navbar flex items-center content-evenly bg-slate-100 py-4 rounded-lg">
            <div className="logo text-3xl font-bold">
                <h1>Your<span className='text-orange-600'>LOGO</span></h1>
            </div>


            <div className="menu ">
                <ul className="flex items-center content-center gap-10 text-xl">
                    <li className="hover:text-orange-600 active:hover:text-orange-600 ">
                        <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-600": ""}`}>Home</NavLink>
                    </li>
                    <li className="hover:text-orange-600 active:hover:text-orange-600 ">
                        <NavLink to="/about" className={({isActive}) => `${isActive ? "text-orange-600": ""}`}>About</NavLink>
                    </li>
                    <li className="hover:text-orange-600 active:hover:text-orange-600 ">
                        <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-orange-600": ""}`}>Contact</NavLink>
                    </li>
                    <li className="hover:text-orange-600 active:hover:text-orange-600 ">
                        <NavLink to="/github" className={({isActive}) => `${isActive ? "text-orange-600": ""}`}>Github</NavLink>
                    </li>
                    <li className="hover:text-orange-600 active:hover:text-orange-600 ">
                        <NavLink to="/user" className={({isActive}) => `${isActive ? "text-orange-600": ""}`}>User</NavLink>
                    </li>
                </ul>
            </div>


            <div className="btns"> 
                <button className='text-xl hover:text-orange-600 active:hover:text-orange-600'>
                    <NavLink to="/login" className={({isActive}) => `${isActive ? "text-orange-600": ""}`}>Login</NavLink>
                </button>
                <button className='bg-orange-600 text-white py-3 px-10 ml-6 rounded-xl' >Get Started</button>
            </div>
        </div>
    </>
  )
}
