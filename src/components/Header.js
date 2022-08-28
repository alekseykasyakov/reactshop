import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo' >House staff</span>
        </div>
        <ul className='nav'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        <div className='presentation'></div>
    </header>
  )
}
