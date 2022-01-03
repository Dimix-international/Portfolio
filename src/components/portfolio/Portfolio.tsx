import s from './Portfolio.module.scss'
import {PortfolioItem} from "./portfolioItem/PortfolioItem";
import {useContext, useEffect, useRef, useState} from "react";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio, DataPortfolioType,
} from '../../data'
import {useOnScreen} from "../../hooks/onScreen";
import {ThemeContext} from "../../context";

export type ItemListType = {
    id:selectedItemType,
    title:string
}
export type selectedItemType ='featured' | 'web' | 'mobile' | 'design' | 'branding';

export const Portfolio = () => {
    const[selectedItem, setSelectedItem] = useState<selectedItemType>('featured');
    const[data, setData] = useState<Array<DataPortfolioType>>([]);

    const list: Array<ItemListType> = [
        {
            id:'featured',
            title:'Featured'
        },
        {
            id:'web',
            title:'Web App'
        },
        {
            id:'mobile',
            title:'Mobile App'
        },
        {
            id:'design',
            title:'Design'
        },
        {
            id:'branding',
            title:'Branding'
        },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);

    const isVisible = useOnScreen(containerRef);
    const{setActivePointOfMenu} = useContext(ThemeContext);


    useEffect(() => {
        if(isVisible) {
            setActivePointOfMenu('Portfolio')
        }
    },[isVisible, setActivePointOfMenu])

    useEffect(() => {

        switch (selectedItem) {
            case "featured":
                return setData(featuredPortfolio);
            case "web":
                return setData(webPortfolio);
            case "branding":
                return setData(contentPortfolio);
            case "design":
                return setData(designPortfolio);
            case "mobile":
                return setData(mobilePortfolio);
            default: return setData(featuredPortfolio);
        }

    },[selectedItem])

    return (
        <div ref={containerRef} className={s.portfolio} id={'portfolio'}>
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map(item => (
                        <PortfolioItem
                            key={item.id}
                            item={item}
                            active={selectedItem === item.id}
                            setSelectedItem={setSelectedItem}
                        />
                    ))
                }
            </ul>
            <div className={s.container}>
                <div className={s.row}>
                    {data.map(item => (
                        <div key={item.id} className={s.item}>
                            <div className={s.image}>
                                <img
                                    src={item.img}
                                    alt=""/>
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}