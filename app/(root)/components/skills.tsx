import Image from 'next/image';
import {skills} from '../../constants'

const Skills = () => {
    return (<div className='pt-4'>
            <div className="text-xl pt-1 h-5 border-b-[1px] border-bblue/70 mb-2 text-background/70">  
                <span className="bg-foreground pl-8 pr-4 uppercase font-semibold">
                    Skills
                </span>
            </div>
            <div className='p-10 pt-3 flex flex-col gap-y-2'>
                {
                    skills.map((ele,idx)=>{
                        return(
                            <div className="" key={idx}>
                                <div className="flex uppercase font-semibold">
                                    <Image unoptimized alt={`${idx}`} src={ele.image_path} width={30} height={30} className="object-cover pr-2 mr-2 mb-1"/>
                                    {ele.title} :
                                </div>
                                <div className="">
                                    {ele.data}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>  );
}
 
export default Skills;