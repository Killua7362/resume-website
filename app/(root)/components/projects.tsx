"use client"
import { FaGithub } from "react-icons/fa";
import {ml_projects,web_dev_projects} from '../../constants'

import { useEffect, useState } from "react";
import { LiaFileDownloadSolid } from "react-icons/lia";

const Projects = () => {
    const [projectType,setProjectType] = useState({type:"Machine Learning"});
    const [isRendered,setIsRendered] = useState(false);
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('projectType') || "")
        if(data){
            setProjectType(data)
        }
        setIsRendered(true)
    },[])
    useEffect(()=>{
        if(isRendered){
            localStorage.setItem('projectType',JSON.stringify(projectType))
        }
    },[projectType,isRendered])
    return (
         <div className="p-4">
            <div className="text-xl pt-1 h-5 border-b-[1px] border-bblue/70 mb-2 text-background/70">  
                <span className="bg-foreground px-2 uppercase font-semibold">
                    Projects (<span className="text-base">{projectType.type}</span>)
                </span>
            </div>
                <div className="w-fit h-10 flex items-center justify-start px-4 pt-2 mt-3 text-xs text-foreground gap-x-2">
                    <div
                     className={`p-2 rounded-lg cursor-pointer ${projectType.type === "Full Stack"?"bg-[#20A7D8] border-[1.9px] border-bblue":"bg-[#20A7D8]/80"}`}
                     onClick={()=>{
                        setProjectType({type:"Full Stack"})
                     }}
                     >
                        Full Stack
                    </div>
                <a href={`${projectType.type === 'Machine Learning'?"/resume/ML/AkshayBhat_resume.pdf":"/resume/FullStack/AkshayBhat_resume.pdf"}`}  target="_blank" tabIndex={-1}>
                    <LiaFileDownloadSolid target="_blank" className={`text-3xl cursor-pointer text-[${projectType.type === 'Full Stack'?"#20A7D8":"#C10528"}]`}/>
                </a>
                    <div
                     className={`p-2 rounded-lg cursor-pointer ${projectType.type === "Machine Learning"?"bg-[#C10528] border-[1.9px] border-bblue":"bg-[#C10528]/80"}`}
                     onClick={()=>{
                        setProjectType({type:"Machine Learning"})
                     }}
                    >
                        Machine Learning
                    </div>
                </div>
            {isRendered && <div className="pt-4 grid grid-cols-2 gap-4">
                {
                    (projectType.type === 'Machine Learning'?ml_projects:web_dev_projects).map((ele,idx)=>{
                        return ( <div key={idx}>
                            <div className="flex px-2 items-center pb-1">
                                <div className="text-xl font-semibold uppercase pr-2 ">
                                    {ele.title}
                                </div>
                                <div className="text-base text-background/70 pl-2 border-l-2 border-background/70 leading-5">
                                    {ele.techstack}
                                </div>
                            </div>
                            <a className="text-sm ml-4 mb-1 mt-1 text-background/70 w-fit flex gap-x-1 items-center" target="_blank" tabIndex={-1} href={ele.github_link}>
                                <FaGithub className="text-lg text-background"/>
                                Github
                            </a>
                            <ul className="list-disc ml-12 text-base text-justify">
                                {
                                    ele.points.map((e,i)=>{
                                        return(
                                            <li key={i}>
                                                {e}
                                            </li>           
                                        )
                                    })
                                }
                            </ul>
                        </div> )
                    })
                }
            </div>}
    </div> )
    };
 
export default Projects;