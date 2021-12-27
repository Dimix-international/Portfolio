import './SkillsBar.scss'

type SkillsType = {
    id:string,
    name:string,
    addClass: string
}

const skillsArray:Array<SkillsType> = [
    {
        id: '1',
        name:'HTML & CSS',
        addClass:'htmlCss'
    },
    {
        id: '2',
        name:'React',
        addClass:'react'
    },
    {
        id: '3',
        name:'Redux',
        addClass:'redux'
    },
    {
        id: '4',
        name:'JavaScript',
        addClass:'js'
    },
    {
        id: '5',
        name:'TypeScript',
        addClass:'ts'
    },
]
export const SkillsBar = () => {

    return (
        <div className="wrapper">
            <div className="scills-bar">
                {
                    skillsArray.map(skill => (
                        <div key={skill.id} className="bar">
                            <div className="info">
                                <span>{skill.name}</span>
                            </div>
                            <div className={`progress-line ${skill.addClass}`}>
                                <span></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}