const AuthLayout = ({ children }: {childreen: React.ReactNode}) => {
    return ( 
        <div className="bg-red-500 h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;