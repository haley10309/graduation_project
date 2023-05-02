import React, { useState } from 'react';



const Navbar = () => {
    const menuLst = ["Search", "About", "Refer"];
    const [hide, setHide] = useState(false);
    
    const mouseEvent = ( bool) => {
        const change = { ...hide };
        change= bool;
        setHide(change);
    };

    
    

    return (
        <nav className="nav">
            {/* Home 제목 */}
        <a href="/" className="site-title">
            Konfold
        </a>
        {/* 대 메뉴  */}
        
        <ul className="navContainer">
         
       
            
            <li>
                <a href="/Search">Search</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            
            <li  className={hide ? "active" : "none"}
            onMouseEnter={() => setHide(false)}
            onMouseLeave={() => setHide(true)}>
                {hide && (
               <p className='ref'>{`Reference`}</p>)}
                
                {!hide && (<div className='refer-menu'>
        
          
                <li >
                    
                    <a href="/Refer/Prediction/*">Prediction</a>
                </li>
                <li>
                    <a href="/Refer/HowAlpha/*">HowAlpha</a>
                </li>
                <li>
                    <a href="/Refer/HowRoseta/*">HowRoseta</a>
                </li>


                        </div>)}
            </li>
        
        </ul>
        
        
        
    </nav>
    );
};

export default Navbar;

