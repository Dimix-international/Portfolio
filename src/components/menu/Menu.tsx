import s from './Menu.module.scss'
import React, {MouseEvent, useContext} from "react";
import {ThemeContext} from "../../context";

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
        href: '#aboutMe',
        text:'About me'
    },
    {
        id: '3',
        href: '#skills',
        text:'Skills'
    },
    {
        id: '4',
        href: '#portfolio',
        text:'Portfolio'
    },
    {
        id: '5',
        href: '#contact',
        text:'Contact'
    },
]
export const Menu: React.FC<MenuType> = React.memo((props) => {

    const {isOpenMenu, setOpenMenu} = props;
    const {currentPoint} = useContext(ThemeContext);
    console.log(currentPoint)


    const finallyMenuClass = isOpenMenu? `${s.menu} ${s.active}` : s.menu;

/*    const moveOnPoint = (e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href')?.replace('#','');
        console.log(document.getElementById(id || '0')?.offsetTop || 0)
        window.scrollTo({
            top: document.getElementById(id || '0')?.offsetTop || 0,
            behavior:'smooth',
        })
    }*/

    const closeMenu = () => {
        setOpenMenu(false)
    }
    return (
        <div className={finallyMenuClass}>
            <ul>
                {
                    itemMenu.map(item => (
                        <li key={item.id} onClick={closeMenu}>
                            <a
                                href={item.href}
                                className={currentPoint === item.text ? s.current : ''}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
})