const About = () => {
    return (
        <div className="flex justify-between h-[7rem] p-6 lg:p-10  w-full items-center text-background/70">
            <div className="flex flex-col justify-center">
                <div className="text-3xl text-background">
                    Akshay Bhat
                </div>
                <div className="text-base">
                    Web Developer / Machine Learning Engineer
                </div>
            </div>
            <a className=" cursor-pointer text-background/80 hover:text-background/60" target="_blank" tabIndex={-1} href="https://github.com/Killua7362/resume-website">
                Code
            </a>
        </div>
      );
}
 
export default About;