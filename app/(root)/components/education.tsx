import Image from "next/image";
import { FcLink } from "react-icons/fc";

const Education = () => {
    return (
    <div className="pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-4 lg:gap-10">
            <div>
                <div className="text-xl ml-2 h-5 border-b-[1px] border-bblue/70 lg:mb-2 text-background/70">  
                    <span className="bg-foreground px-2 uppercase font-semibold">
                        Education
                    </span>
                </div>
                <div className="flex p-4 gap-x-4">
                    <Image unoptimized alt='NITK' src='/icons/nitk.png' width={0} height={0} className="border-[2px] border-black rounded-full w-auto h-auto max-w-[50px] max-h-[50px]"/>
                    <div>
                        <a className="text-xl font-semibold flex items-center gap-x-2 cursor-pointer text-background/80 hover:text-background/60" href="https://www.nitk.ac.in/" target="_blank" tabIndex={-1}>
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
                <div className="text-xl h-5 border-b-[1px] border-bblue/70 lg:mb-2 text-background/70">  
                    <span className="bg-foreground px-2 uppercase font-semibold">
                        Highlights
                    </span>
                </div>
                <div className="flex p-4 lg:p-2 w-fit flex-col">
                    <span className="uppercase font-semibold flex gap-x-2 pb-2 items-center">
                        <Image unoptimized src={"icons/mcn.png"} alt="" width={0} height={0} className="w-auto h-auto max-w-[20px] max-h-[20px]"/> 
                            <a  href="https://www.millenniumfellows.org/fellowship" tabIndex={-1} target="_blank" className="flex items-center gap-x-1 text-background/80 hover:text-background/60">
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