import s from './PortfolioItem.module.scss'
import React from "react";
import {ItemListType, selectedItemType} from "../Portfolio";



type PortfolioListType = {
    item:ItemListType
    active: boolean
    setSelectedItem: (value:selectedItemType) => void
}
export const PortfolioItem:React.FC<PortfolioListType> = React.memo(props => {

    const {item, active, setSelectedItem} = props;
    const finalClass = active ? `${s.item} ${s.active}` : s.item;

    const setActive = () => {
        setSelectedItem(item.id)
    }

    return (
        <>
            <li
                className={finalClass}
                onClick={setActive}
            >
                {item.title}
            </li>
        </>
    )
})