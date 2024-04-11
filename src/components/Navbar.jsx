import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({user}) {
  //trick to destucture
  // const [{ value: photo }] = user?.photos;
  const photo = user?.photos;
  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className='navbar'>
        <span className="logo"><Link className='link'>
        Lama App
        </Link></span>
        {user? (    <ul className="list">
            <li className="listItem">
                <img src={photo?.[0]?.value} alt="" className="avatar" />
            </li>

            <li className="listItem">{user?.username||user?.displayName}</li>
            <li className="listItem" onClick={handleLogout}>Logout</li>
        </ul>) :(  <ul className="list">
        
        <li className="listItem"><Link className='link' to="/login">
       login
        </Link></li>
    </ul>)}
    
      
    </div>
  )
}

export default Navbar