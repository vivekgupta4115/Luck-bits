// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import "./Navbar.css";


// const Navbar = () => {
//      const menuItems = [
      //  {
      //    id: "1",
      //    name: "Home",
      //      link: '',
      //  },
      //  {
      //    id: "2",
      //    name: "Tournaments",
      //    link: "Tournaments",
      //  },
      //  {
      //    id: "3",
      //    name: "Jackpots",
      //      link: 'jackpots',
      //  },
//      ];
    
//       const [activeItem, setActiveItem] = useState(menuItems[0].id); 
//       const navigate = useNavigate(); // Hook for navigation
    
//       const handleItemClick = (itemId) => {
//         setActiveItem(itemId);
    
//         console.log(`Navigating to ${menuItems.find(item => item.id === itemId)?.link}`);
//         navigate(
//           `/casino/${menuItems.find((item) => item.id === itemId)?.link}`
//         );
//       };

//   return (
//     <div>
//         <nav className="navbar-container">
//       <ul className="navbar-menu">
//         {menuItems.map((item) => (
//           <li
//             key={item.id}
//             className={`navbar-item ${activeItem === item.id ? 'active' : ''}`}
//             onClick={() => handleItemClick(item.id)}
//           >
//             {/* You can use React Router's <Link> component here if you're using it */}
//             {/* <a href={item.link}>{item.name}</a> */}
//             <a>{item.name}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import '../../MyComponent/Header2.css'; 
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: "1",
      name: "Home",
      route: "",
    },
    {
      id: "2",
      name: "Tournaments",
      route: "Tournaments",
    },
    {
      id: "3",
      name: "Jackpots",
      route: "jackpots",
    },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].id); 

const handleItemClick = (route, itemId) => {
  setActiveItem(itemId);
  // navigate(`/live/${route}`);
  // Get current base path (e.g. '/sports' from '/sports/livecalendar')
  const basePath = location.pathname.split("/")[1]; // grabs 'sports' or 'live' or anything

  // Navigate to /basePath/route (e.g., /sports/result or /live/result)
  navigate(`/${basePath}/${route}`);
};
  return (
    <nav className="navbar-container mt-[3.22rem]">
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`navbar-item ${activeItem === item.id ? "active" : ""}`}
            // onClick={() => handleItemClick(item.route, item.itemId)}
            onClick={() => handleItemClick(item.route, item.id)}
          >
            {/* You can use React Router's <Link> component here if you're using it */}
            {/* <a href={item.link}>{item.name}</a> */}
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
