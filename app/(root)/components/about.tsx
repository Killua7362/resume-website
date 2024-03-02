const About = () => {
    return (
        <div className="flex justify-between h-[7rem] p-10  w-full items-center text-background/70">
            <div className="flex flex-col justify-center">
                <div className="text-3xl text-background">
                    Akshay Bhat
                </div>
                <div className="text-base">
                    Web Developer / Machine Learning Engineer
                </div>
            </div>
            <a className=" cursor-pointer text-background" target="_blank" tabIndex={-1} href="https://github.com/Killua7362/resume-website">
                Source Code
            </a>
        </div>
      );
}
 
export default About;