const RootLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="bg-foreground h-full w-[60%]">
            {children}
        </div>
      );
}
 
export default RootLayout;