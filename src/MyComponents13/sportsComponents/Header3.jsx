import React, { useState } from 'react';
import './Header3.css'; 

export default function Header3() {
  const menuItems = [
    {
      id: "1",
      name: "Live",
    },
    {
      id: "2",
      name: "Finished",
      link: "/liveCalender",
    },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].id); 

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);

    console.log(`Navigating to ${menuItems.find(item => item.id === itemId)?.link}`);
  };
  return (
    <nav className="flex items-center px-2 h-[40px] text-[color:var(--navbar-text-color)] font-['Roboto','Arial'] mt-5 rounded-[4px]">
      <ul className="w-[50%] list-none flex items-center h-[80%] m-0 p-0 flex-grow justify-start bg-[#1A253A] 
        overflow-hidden border-none rounded-tl-[4px] rounded-tr-[4px]">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`header-item3 ${
              activeItem === item.id ? "active" : ""
            } `}
            onClick={() => handleItemClick(item.id)}
          >
            {/* You can use React Router's <Link> component here if you're using it */}
            {/* <a href={item.link}>{item.name}</a> */}
            {/* <a className="text-blue-800 hover:text-red">{item.name}</a> */}
            <a
              //   href={item.href}
              className={`${
                activeItem == item.id
                  ? "text-white/90 bg-[#333D50] font-semibold"
                  : "text-white/50"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
