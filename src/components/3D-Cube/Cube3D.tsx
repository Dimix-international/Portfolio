import React from "react";
import s from './Cube3D.module.css'
import {SideCube} from "./Side-Cube/Side_Cube";


export type imgType = {
    id: string,
    src: string,
    side: string,
    sign: string
}
export type Cube3DType = {
    images: Array<imgType>
}


export const Cube3D: React.FC<Cube3DType> = (props) => {
    const {images} = props;
    return (
        <div className={s.wrapperCube}>
            <div className={s.containerCube}>
                <div className={s.imageCube}>
                    {images.map(i => {
                        return (
                            <SideCube
                                key={i.id}
                                id={i.id}
                                side={i.side}
                                img={i.src}
                                sign={i.sign}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}