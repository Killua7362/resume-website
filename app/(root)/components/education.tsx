import Image from "next/image";
import { FcLink } from "react-icons/fc";

const Education = () => {
    return (
    <div className="pt-4">
        <div className="grid grid-cols-2 p-4 gap-10">
            <div>
                <div className="text-xl pt-1 ml-2 h-5 border-b-[1px] border-bblue/70 mb-2 text-background/70">  
                    <span className="bg-foreground px-2 uppercase font-semibold">
                        Education
                    </span>
                </div>
                <div className="flex p-4 gap-x-4">
                    <Image unoptimized alt='NITK' src='/icons/nitk.png' width={50} height={50} className="border-[2px] border-black rounded-full"/>
                    <div>
                        <a className="text-xl font-semibold flex items-center gap-x-2 cursor-pointer" href="https://www.nitk.ac.in/" target="_blank" tabIndex={-1}>
                            National Institute of Technology, Karnataka
                            <FcLink/>
                        </a>
                        <div className="text-base text-background/70">
                            Bachelor of Technology, 2019 - 2023
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-xl pt-1 h-5 border-b-[1px] border-bblue/70 mb-2 text-background/70">  
                    <span className="bg-foreground px-2 uppercase font-semibold">
                        Highlights
                    </span>
                </div>
                <div className="flex p-2 w-fit flex-col">
                    <span className="uppercase font-semibold flex gap-x-2 pb-2 items-center">
                        <Image unoptimized src={"icons/mcn.png"} alt="" width={20} height={20}/> 
                            <a  href="https://www.millenniumfellows.org/fellowship" tabIndex={-1} target="_blank" className="flex items-center gap-x-1">
                                Millenium Fellowship
                                <FcLink/>
                            </a>
                    </span>
                    <span className="text-justify">
                        Taught over 30+ students who come from poor background and conducted drives for donating books and clothes to orphanages.
                    </span>
                </div>
            </div>
        </div>
    </div>  );
}
 
export default Education;