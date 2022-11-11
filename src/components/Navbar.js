import React from 'react';


const Navbar = () => {
    return (
        <div style={{padding:"10px" , display:"flex", justifyContent:"space-between"}}>
            <ul style={{display:"flex" ,justifyContent:"space-between" , listStyle:"none" ,width:"300px"}}>
                <li>name</li>
                <li>avatar</li>
            </ul>
            <ul style={{display:"flex" ,justifyContent:"space-between" , listStyle:"none" ,width:"300px"}}>
                <li>Hamburger</li>
                <li>Logo</li>

            </ul>
        </div>
    );
};

export default Navbar;