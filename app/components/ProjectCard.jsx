import React from 'react'
import {EyeIcon} from "@heroicons/react/24/outline"
import Link from "next/link"

const ProjectCard = ({imgUrl, title, description, projectUrl }) => {
  return (
    <div>
        <div 
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#484848] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-50 transition-all duration-500'>
                <Link href={projectUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></EyeIcon>
                </Link>
            </div>
        </div>
        <div className='text-[#2e2e2e] rounded-b-xl mt-3 bg-[#fff0f0] py-6 px-4'>
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className='text-[#4e4e4e]'>{description}</p>
        </div>        
    </div>
  )
}

export default ProjectCard