import React from 'react';
import DropdownSection from './DropdownSection';
const Winner = () => {
  const items1 = [
    { title: 'UEFA Nations League', count: 2 },
    { title: 'UEFA Nations League. Outright', count: 2 },
    { title: 'UEFA Champions League', count: 2 },
    { title: 'UEFA Champions League - Women', count: 2 },
  ];

  const items2 = [
    { title: 'FIFA Club World Cup', count: 5 },
    { title: 'FIFA U20 WorlFIFA Club World Cup.', count: 1 },
    { title: 'World Cup Europe Qualification', count: 3 },
  ];

  const items3 = [
    { title: 'Premier League', count: 5 },
    { title: 'Premier League. Outright', count: 1 },
    { title: 'Championship', count: 3 },
  ];

  const items4 = [
    { title: 'FIFA World Cup', count: 5 },
    { title: 'FIFA U20 World Cup', count: 1 },
    { title: 'FIFA Women\'s World Cup', count: 3 },
  ];

  const items5 = [
    { title: 'FIFA World Cup', count: 5 },
    { title: 'FIFA U20 World Cup', count: 1 },
    { title: 'FIFA Women\'s World Cup', count: 3 },
  ];

  return (
    <div className="space-y-2">
      <DropdownSection title="Europe" count={7} items={items1} />
      <DropdownSection title="World" count={44} items={items2} />
      <DropdownSection title="England" count={20} items={items3} />
      <DropdownSection title="Germany" count={5} items={items4} />
      <DropdownSection title="Spain" count={56} items={items5} />
    </div>
  );
};

export default Winner;











// import React, { useState } from 'react'
// import { GiEuropeanFlag } from "react-icons/gi";
// import { FaAngleDown } from "react-icons/fa";
// import { FaAngleUp } from "react-icons/fa";


// const Winner = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [isExpand, setExpand] = useState(false);


//   return (
//     <div>
//         <div className='relative w-full h-[36px] pt-[0px] pb-[0px] pl-[10px] pr-[10px] rounded-[4px] flex justify-between
//            items-center' onClick={() => {setIsOpen(!isOpen); setExpand(!isExpand)}}>
//             <GiEuropeanFlag  className='text-white/90 flex-shrink-0 me-[10px] w-[22px] h-[14px]'/>
//             <div className='flex justify-center flex-col flex-auto h-[100%] overflow-hidden whitespace-nowrap overflow-ellipsis'>
//                 <p className='text-[14px] text-white/90 me-[10px] overflow-hidden whitespace-nowrap overflow-ellipsis'>Europe</p>
//             </div>
//             <span className='text-white/75 text-[13px] flex-shrink-0'>9</span>
//             {
//                 isOpen ? (
//                     <FaAngleUp className='ms-[12px] flex-shrink-0 text-white/70 text-[11px]' />
//                     ) : (
//                         <FaAngleDown className='ms-[12px] flex-shrink-0 text-white/70 text-[11px]' />
//                     )
//             }
//             {
//                 isExpand ? (
//                     <div>
//                         <div className='absolute rounded-[4px] will-change-scroll pointer-events-auto overflow-x-hidden' >
//                             <div className='flex items-center h-[35px] ps-[8px] pe-[10px] bg-white/10 rounded-[4px]'>
//                                 <p>11</p>
//                                 <span>UEFA Nations League</span>
//                                 <span>2</span>
//                             </div>
//                         </div>
//                     </div>
//                 ) : ("")
//             }
//            </div>
//     </div>
//   )
// }

// export default Winner



// import React, { useState } from 'react';
// import { GiEuropeanFlag } from "react-icons/gi";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { MdOutlineStarBorderPurple500 } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";


// const Winner = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <div className="relative w-full max-w-md mx-auto"> {/* outer container */}
//       {/* Header */}
//       <div
//         className='h-[36px] px-[10px] rounded-[4px] flex justify-between items-center cursor-pointer bg-[#1f1f1f]'
//         onClick={toggleDropdown}
//        >
//         <GiEuropeanFlag className='text-white/90 flex-shrink-0 me-[10px] w-[22px] h-[14px]' />
//         <div className='flex justify-center flex-col flex-auto h-full overflow-hidden whitespace-nowrap overflow-ellipsis'>
//           <p className='text-[14px] text-white/90 me-[10px] overflow-hidden whitespace-nowrap overflow-ellipsis'>
//             Europe
//           </p>
//         </div>
//         <span className='text-white/75 text-[13px] flex-shrink-0'>9</span>
//         {isOpen ? (
//           <FaAngleUp className='ms-[12px] flex-shrink-0 text-white/70 text-[11px]' />
//         ) : (
//           <FaAngleDown className='ms-[12px] flex-shrink-0 text-white/70 text-[11px]' />
//         )}
//       </div>

//       {/* Dropdown */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full mt-0 flex flex-col transition-all duration-0 ease delay-0 transform  rounded shadow-lg px-1 z-10">
//           <div className='bg-[#313b4e] h-[35px] ps-[8px] pe-[10px] rounded-[4px] flex justify-between items-center'>
//             <div className='flex items-center justify-center gap-x-3'>
//               <MdOutlineStarBorderPurple500  className='text-white/70 h-[25px] text-[30px] leading-[25px]'/>
//               <div className='border border-r-[#000c24] h-[25px]'></div>
//               <p className=' text-white/90 text-[13px] text-center'>UEFA Nations League</p>
//             </div>
//             <div className='flex justify-center items-center gap-x-2 text-white/70 text-[13px]'>
//               <p>2</p>
//               <MdKeyboardArrowRight className='text-[18px]' />
//             </div>
//           </div>

//           {/* items 2 */}
//           <div className='bg-[#313b4e] h-[35px] ps-[8px] pe-[10px] rounded-[4px] flex justify-between items-center'>
//             <div className='flex items-center justify-center gap-x-3'>
//               <MdOutlineStarBorderPurple500  className='text-white/70 h-[25px] text-[30px] leading-[25px]'/>
//               <div className='border border-r-[#000c24] h-[25px]'></div>
//               <p className=' text-white/90 text-[13px] text-center'>UEFA Nations League. Outright</p>
//             </div>
//             <div className='flex justify-center items-center gap-x-2 text-white/70 text-[13px]'>
//               <p>2</p>
//               <MdKeyboardArrowRight className='text-[18px]' />
//             </div>
//           </div>


//           {/* items 3 */}
//           <div className='bg-[#313b4e] h-[35px] ps-[8px] pe-[10px] rounded-[4px] flex justify-between items-center'>
//             <div className='flex items-center justify-center gap-x-3'>
//               <MdOutlineStarBorderPurple500  className='text-white/70 h-[25px] text-[30px] leading-[25px]'/>
//               <div className='border border-r-[#000c24] h-[25px]'></div>
//               <p className=' text-white/90 text-[13px] text-center'>UEFA Champions League</p>
//             </div>
//             <div className='flex justify-center items-center gap-x-2 text-white/70 text-[13px]'>
//               <p>2</p>
//               <MdKeyboardArrowRight className='text-[18px]' />
//             </div>
//           </div>

//           {/* items 4 */}
//           <div className='bg-[#313b4e] h-[35px] ps-[8px] pe-[10px] rounded-[4px] flex justify-between items-center'>
//             <div className='flex items-center justify-center gap-x-3'>
//               <MdOutlineStarBorderPurple500  className='text-white/70 h-[25px] text-[30px] leading-[25px]'/>
//               <div className='border border-r-[#000c24] h-[25px]'></div>
//               <p className=' text-white/90 text-[13px] text-center'>UEFA Champions League - Women</p>
//             </div>
//             <div className='flex justify-center items-center gap-x-2 text-white/70 text-[13px]'>
//               <p>2</p>
//               <MdKeyboardArrowRight className='text-[18px]' />
//             </div>
//           </div>
          
//         </div>  
//       )}
 

//     </div>

//     </>  
//   );
// };

// export default Winner;







