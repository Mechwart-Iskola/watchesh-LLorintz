import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useEffect, useState } from 'react';

const Header = () => {

  {/*Adj a theme ikonhoz egy olyan funkciót amivel váltogatni lehet a light és dark mode között*/}
  
   const [theme, setTheme]=useState(false)
   const [toggle, setToggle]= useState(false)
   const [cart, setCart] = useState(false)

   const handleSetCart = ()=>{
    setCart(!cart)
   }

   useEffect(()=>{
    if (theme) {
        document.body.classList.add('dark-theme')
    }
    else{
        document.body.classList.remove('dark-theme')
    }   
   },[theme])
   
  {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet nyitni a navigációs menüt a close ikonnal meg bezárni*/}

  {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}

  {/* Állítsd be az App.css-ben az ul osztályszelektornak, hogy a listaelemek pontok nélkül jelenjenek meg */}

  

  return (
    <>
    <header className="header" id="header">
    <nav >
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className={`nav__menu ${toggle?"show-menu":""}`}  id="nav-menu">      
            <ul className="nav__list">
                {["Home", "Featured", "Products", "New"].map(item=>(
                    <li className='nav__item'>
                        <a href="#" className='nav__link'>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="nav__close" id="nav-close" onClick={()=>setToggle(!toggle)} >
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">           
            <i className='bx bx-moon change-theme' id="theme-button" onClick={()=>setTheme(!theme)}></i>
            <div className="nav__shop" id="cart-shop" onClick={handleSetCart}>
                <i className='bx bx-shopping-bag'></i>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={()=>setToggle(!toggle)}>
                <i className='bx bx-grid-alt' ></i>
            </div>
        </div>
    </nav>
</header>
{cart && <Cart onExit={handleSetCart}></Cart>}
 </>
  )
}

export default Header