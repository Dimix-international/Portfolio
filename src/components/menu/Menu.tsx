import s from './Menu.module.scss'
import React from "react";

type MenuType = {
    isOpenMenu: boolean,
    setOpenMenu: (value: boolean) => void
}
type ItemType = {
    id: string,
    href: string,
    text:string
}
const itemMenu: Array<ItemType> = [
    {
        id: '1',
        href: '#intro',
        text:'Home'
    },
    {
        id: '2',
        href: '#portfolio',
        text:'Portfolio'
    },
    {
        id: '3',
        href: '#works',
        text:'Works'
    },
    {
        id: '4',
        href: '#testimonials',
        text:'Testimonials'
    },
    {
        id: '5',
        href: '#contact',
        text:'Contact'
    },
]
export const Menu: React.FC<MenuType> = React.memo((props) => {

    const {isOpenMenu, setOpenMenu} = props;

    const finallyMenuClass = isOpenMenu? `${s.menu} ${s.active}` : s.menu;

    const closeMenu = () => {
        setOpenMenu(false)
    }
    return (
        <div className={finallyMenuClass}>
            <ul>
                {
                    itemMenu.map(item => (
                        <li key={item.id} onClick={closeMenu}>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
})