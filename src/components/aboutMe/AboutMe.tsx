import {useContext, useEffect, useRef} from "react";
import {useOnScreen} from "../../hooks/onScreen";
import {ThemeContext} from "../../context";


export const AboutMe = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(containerRef);
    const{setActivePointOfMenu} = useContext(ThemeContext);


    useEffect(() => {
        if(isVisible) {
            setActivePointOfMenu('About me')
        }
    },[isVisible, setActivePointOfMenu])


    return(
        <div ref={containerRef} id={'aboutMe'}>about me</div>
    )
}