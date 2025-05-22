import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'

const Skills = () => {
  return (
    <section 
    id="skills"
    className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    style={{transform: "scale(0.9"}}
    >
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillsDataProvider
                    key={index}
                        src={image.Image}
                        width={image.width}
                        heigth={image.height}
                        index={index}
                    />
            ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillsDataProvider
                    key={index}
                        src={image.Image}
                        width={image.width}
                        heigth={image.height}
                        index={index}
                    />
            ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillsDataProvider
                    key={index}
                        src={image.Image}
                        width={image.width}
                        heigth={image.height}
                        index={index}
                    />
            ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillsDataProvider
                    key={index}
                        src={image.Image}
                        width={image.width}
                        heigth={image.height}
                        index={index}
                    />
            ))}
            </div>

            <div className="w-full h-full absolute">
                <div>
                    
                </div>
            </div>
    </section>
  )
}

export default Skills