const RootLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="bg-foreground min-h-screen xl:h-full xl:w-[60%] w-full">
            {children}
        </div>
      );
}
 
export default RootLayout;