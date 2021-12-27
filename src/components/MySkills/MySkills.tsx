import {Cube3D} from "../3D-Cube/Cube3D";
import reactImg from "../3D-Cube/assets/react.jpg";
import reduxImg from "../3D-Cube/assets/redux.jpeg";
import jsImg from "../3D-Cube/assets/js.jpg";
import tsImg from "../3D-Cube/assets/ts.png";
import s from './MySkills.module.scss'
import {SkillsBar} from "./SkillsBar/SkillsBar";
import {useRef} from "react";
import {useOnScreen} from "../../hooks/onScreen";

export const MySkills = () => {
    const images = [
        {id:'1', src:reactImg, side:'front', sign:'react'},
        {id:'2', src:reduxImg, side:'right', sign:'redux'},
        {id:'3', src:jsImg, side:'back', sign:'js'},
        {id:'4', src:tsImg, side:'left', sign:'ts'},
    ]
    
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(containerRef);
    return (
        <div className={s.skills}>
            <h1 className={s.title}>My skills</h1>
            <div ref={containerRef} className={s.container}>
                {
                    isVisible &&   <div className={s.body}>
                        <div className={s.skills}>
                            <SkillsBar/>
                        </div>
                        <div className={s.cube}><Cube3D images={images}/></div>
                    </div>
                }
            </div>
        </div>
    )
}