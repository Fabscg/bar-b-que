import React from 'react'
import Menu from '../Menu'
import SingerPage from '../SingerPage'


export default function Header() {
    return (
        <div className="menu">
            <div>
                <h1 className='menu-title'>~ Bar-B Que ~</h1>
                <div className='fixed-bg'></div>
            </div>
            <Menu />
            <SingerPage />
        </div>
    )
}
