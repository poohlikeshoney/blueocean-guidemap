import { useState,useEffect } from 'react';
import SidebarNav from "./SidebarNav";
function Header(){
    let [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('header');
          const headerHeight = header.getBoundingClientRect().height;
          const arrowUp = document.querySelector('.arrow_up');
    
          if (headerHeight < window.scrollY) {
            header.classList.add('dark');
          } else {
            header.classList.remove('dark');
          }
    
          if (window.scrollY > 250) {
            arrowUp.classList.add('active');
          } else {
            arrowUp.classList.remove('active');
          }
        };
    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <header className="row">
                <div className="logo_box">
                    <a href="/">
                    <img src="img/logo.png" alt="로고" />
                    </a>
                </div>
                <div className="hamburger_menu" onClick={()=>{ setSidebar(true) }}>
                    <i className="fa-solid fa-bars" />
                </div>
            </header>


            <div className="arrow_up"><i className="fas fa-long-arrow-alt-up"></i></div>
            
            <SidebarNav sidebar={sidebar} setSidebar={setSidebar}/>
        </>
    )
}

export default Header