import React from 'react'

export default function Header() {
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
        <div className='presentation'></div>
    </header>
  )
}
