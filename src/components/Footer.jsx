// import React from 'react'

// function Footer() {
//   return (
//     <>
//       <div className="px-2 sm:px-28 mt-6 text-xsm">
//         <div className=" lg:flex justify-center text-xsm border-t-[1px] border-bg3 pt-7">
//           {/* <div className='border-t-[1px] border-bg3 h-20 grid grid-cols-4 gap-5 lg:gap-20 3xl:px-48 pt-5'> */}
//           <div className="flex justify-center">
//             <div className="w-52 lg:text-center">
//               <p>ABOUT</p>
              // <p className="text-gray mt-2 text-wrap">
              //   We are the most trusted betting platform.
              // </p>
//             </div>
//             <div className="w-52">
//               <p>HELP</p>
//               <p className="text-gray mt-2 text-nowrap">Responsible gaming</p>
//               <p className="text-gray  mt-2">FAQs</p>
//             </div>
//           </div>
//           <div className="flex justify-center mt-5 lg:mt-0">
//             <div className="w-52">
//               <p>REGULATIONS</p>
//               <p className="text-gray text-nowrap mt-2">Privacy policy</p>
//               <p className="text-gray text-nowrap mt-2">
//                 {" "}
//                 General terms & conditions
//               </p>
//             </div>
//             <div className="w-52 ">
//               <p className="text-nowrap">GAMING RULES</p>
//               <p className="text-gray  mt-2">Casino</p>
//               <p className="text-gray text-nowrap mt-2">Sport betting</p>
//               <p className="text-gray text-nowrap  mt-2">Bet limit</p>
//             </div>
//           </div>
//         </div>
//         <p className="mt-10 text-center border-b-[1px] border-bg3 pb-5">
//           PAYMENTS
//         </p>
//       </div>
//       <div className="flex text-xsm items-center my-10 mb-10 px-2 sm:px-28 justify-between">
//         <div className="text-pink-600 border-pink-600 border-[1px] rounded-full p-0.5">
//           {" "}
//           18+
//         </div>
//         <div className="text-gray"> 2022-2025 LuckyBet</div>
//       </div>
//     </>
//   );
// }

// export default Footer

// import React from "react";

// function Footer() {
//   return (
//     <footer className="text-[#9aa4af] text-sm font-poppins mb-[10%]">
//       {/* Language Selector */}
//       <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />
//       <div className="flex justify-end px-4 sm:px-10 pt-6">
//         <div className="flex items-center gap-2 bg-[#121d38] border border-white/10 px-3 py-1 rounded-md text-white text-[14px]">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png"
//             alt="English"
//             className="w-5 h-[14px] object-cover"
//           />
//           India
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />

//       {/* Footer Sections */}
//       <div className="text-center space-y-6">
//         <div>
//           <h4 className="text-white text-xs font-medium">ABOUT</h4>
//           <p className="text-gray mt-2 text-wrap">
//             We are the most trusted betting platform.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-white text-xs font-medium">HELP</h4>
//           <div className="flex justify-center items-center gap-2 mt-2 text-xs text-[#9aa4af]">
//             <a href="#">Responsible Gaming</a>
//             <span>|</span>
//             <a href="#">FAQs</a>
//           </div>
//         </div>
//         <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />
//         <div>
//           <h4 className="text-white text-xs font-medium">PAYMENTS</h4>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />

//       {/* Footer Bottom */}
//       <div className="flex flex-col items-center gap-2 pb-6">
//         <span className="text-[#e6007e] border border-[#e6007e] rounded-full px-2 py-0.5 text-xs font-bold">
//           18+
//         </span>
//         <span className="text-xs text-[#9aa4af]">2022 - 2025 Shark34</span>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React, { useState } from "react";

const countries = [
  {
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png",
    language: "Hindi",
  },
  {
    name: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/330px-Flag_of_Germany.svg.png",
    language: "German",
  },
  {
    name: "France",
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5leDJ40Yi0rNza2mnEK_FH-3fmTWDFTkt_A&s",
    language: "French",
  },
  {
    name: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png",
    language: "Japanese",
  },
];

function Footer() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <footer className="text-[#9aa4af] text-sm font-poppins mb-[10%] relative">
      {/* Language Selector */}
      <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />
      <div className="flex justify-end px-4 sm:px-10 pt-0 relative">
        <div
          className="flex items-center gap-2 bg-[#121d38] border border-white/10 px-3 py-1 rounded-md text-white text-[14px] cursor-pointer relative"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.language}
            className="w-5 h-[14px] object-cover"
          />
          {selectedCountry.language}
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-[2.1rem] bg-white border border-white/10 rounded-md w-[28%] z-10">
            {countries.map((country, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer text-sm
      ${
        selectedCountry.name === country.name
          ? "bg-gray text-white"
          : "bg-white text-black hover:bg-gray"
      }`}
                onClick={() => handleSelect(country)}
              >
                {country.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />

      {/* Footer Sections */}
      <div className="text-center space-y-6">
        <div>
          <h4 className="text-[#adb1b9] text-[14px] font-medium">ABOUT</h4>
          <p className="text-gray mt-2 text-wrap">
            {/* We are the most trusted betting platform. */}
          </p>
        </div>

        <div>
          <h4 className="text-[#adb1b9] text-[14px] font-medium">HELP</h4>
          <div className="flex justify-center items-center gap-2 mt-2 text-[12px] text-[#9aa4af]">
            <a href="#">Responsible Gaming</a>
            <span>|</span>
            <a href="#">FAQs</a>
          </div>
        </div>
        <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />
        <div>
          <h4 className="text-[#adb1b9] text-[14px] font-medium">PAYMENTS</h4>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-6 mx-4 sm:mx-10" />

      {/* Footer Bottom */}
      <div className="flex flex-col items-center gap-2 pb-6">
        <span className="text-[#e6007e] border border-[#e6007e] rounded-full px-2 py-0.5 text-xs font-bold">
          18+
        </span>
        <span className="text-[14px] text-[#9aa4af]">2022 - 2025 LUCKYBET</span>
      </div>
    </footer>
  );
}

export default Footer;
