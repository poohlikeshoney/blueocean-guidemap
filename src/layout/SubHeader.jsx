import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarNav from "./SidebarNav";

function Header(){
	let navigate = useNavigate();
    let [sidebar, setSidebar] = useState(false);
    return (
        <>
            <header className="sub_header row">
                <div className="logo_box">
                    <div onClick={()=>{navigate('/')}}>
                    <img src="img/logo.png" alt="로고" />
                    </div>
                </div>
                <div className="hamburger_menu" onClick={()=>{ setSidebar(true) }}>
                    <i className="fa-solid fa-bars" />
                </div>
            </header>

            <SidebarNav sidebar={sidebar} setSidebar={setSidebar}/>
        </>
    )
}

export default Header