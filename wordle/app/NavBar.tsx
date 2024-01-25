import React from 'react'
import Link from 'next/link'
import { GiStripedSword } from "react-icons/gi";
import { TbHelpHexagon } from "react-icons/tb";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiRefresh } from 'react-icons/hi';

const NavBar = () => {
    const iconSize:number = 25;
    const links = [
        {icon: <TbHelpHexagon size={iconSize}/>, href: '/help'},
        {icon: <IoStatsChartOutline size={iconSize}/>, href:'/stats' },
        {icon: <IoSettingsOutline size={iconSize}/>, href: '/settings'}

    ]
    return(
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between'>
            <Link href='/'> <GiStripedSword size={iconSize}/></Link>
            <ul className='flex space-x-6'>
                {links.map( link =>
                <Link 
                key={link.href} 
                className='text-500 hover:text-orange-800 transition-colors' 
                href={link.href}>{link.icon}</Link>)}
            </ul>

        </nav>
    )
}

export default NavBar;