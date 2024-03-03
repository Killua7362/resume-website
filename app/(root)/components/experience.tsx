import {experience} from '../../constants'
import Image from 'next/image'
import { FcLink } from "react-icons/fc";

const Experience = () => {
    return (
        <div className="p-4">
            <div className="text-xl pt-1 h-5 border-b-[1px] border-bblue/70 mb-2 text-background/70">  
                <span className="bg-foreground px-2 uppercase font-semibold">
                    Experience
                </span>
            </div>
            <div className="pt-4 flex flex-col gap-y-2">
                {
                    experience.map((ele,i)=>{
                        return(
                            <div className="flex items-center gap-x-4" key={i}>
                                <div className="text-lg w-full">
                                    <div className="flex justify-between w-full gap-x-4">
                                        <Image unoptimized
                                         alt={ele.company_name}
                                         src={ele.img_src}
                                         height="0"
                                         width="0"
                                         sizes='0'
                                         className={`bg-white shadow-md border-[${ele.company_color}] border-[2px] w-auto h-auto max-w-[50px] max-h-[50px]`} 
                                         style={{borderRadius:'50%',overflow:'hidden'}}
                                        />
                                        <div className="flex w-full justify-between items-start">
                                            <div className="uppercase font-semibold text-xl">
                                                <div>
                                                    {ele.title}
                                                </div>
                                                <a className="text-xs text-background/80 hover:text-background/60 font-semibold flex items-center gap-x-2" tabIndex={-1} target='_blank' href={ele.company_site}>
                                                    {ele.company_name}
                                                    <FcLink/>
                                                </a>
                                            </div>
                                            <div className="text-base text-background/70">
                                                {ele.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex p-6 py-0">
                                        <div className={`w-2 border-l-2 border-[${ele.company_color}]`}>
                                        </div>
                                        <ul className="list-disc ml-14 text-base text-justify">
                                            {ele.points.map((e,idx)=>{
                                                return(
                                                    <li key={idx}>
                                                        {e}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      );
}
 
export default Experience;