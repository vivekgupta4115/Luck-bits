import React from 'react'
import { GiCardAceDiamonds } from 'react-icons/gi'
import { IoMdStopwatch } from 'react-icons/io'
import { RiRadioButtonLine } from 'react-icons/ri'
import { TbCardboards } from "react-icons/tb";
import { CgCardHearts } from "react-icons/cg";
import { Link } from 'react-router-dom';

function MenuList() {
  const list = [
    {
      icon: <RiRadioButtonLine className='text-white' size={22} />, iconBg: "#ad005c", name: 'Live', route: "/live"
    },
    {
      icon: <IoMdStopwatch className='text-white' size={22} />, iconBg: "#485e72", name: 'Sports', route: "/sports"
    },
    {
      icon: <GiCardAceDiamonds className='text-white' size={22} />, iconBg: "#485e72", name: 'Casino', route: "/casino"
    },
    {
      icon: <CgCardHearts className='text-white' size={22} />, iconBg: "#485e72", name: 'Live Casino', route: "#"
    },
    {
      icon: <TbCardboards className='text-white' size={22} />, iconBg: "#ba1313", name: 'Games', route: "#"
    },
  ];

  return (
    <div className='m-2 flex flex-col gap-2'>
      {list.map((item, i) => (
        <Link to={item?.route} key={i} className='bg-bg2 flex items-center gap-2 p-1.5 rounded-[0.25rem]'>
          <div
            className='p-1.5 w-8 h-8 rounded-md flex items-center justify-center'
            style={{ backgroundColor: item.iconBg }}
          >
            {item.icon}
          </div>
          <div>{item?.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default MenuList;
