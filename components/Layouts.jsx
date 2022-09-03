import Navbar from "./Navbar";

const Layout = ({children}) => {
  return ( 
    <div className="">
      <Navbar/>
      <div>
      {children}
      </div>
    </div>
   );
}
 
export default Layout;