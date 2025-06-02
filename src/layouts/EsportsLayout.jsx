// import React from "react";
// import HeaderTabs from "../MyComponents7/HeaderTabs"; // adjust path as needed
// import { Outlet } from "react-router-dom";

// export default function EsportsLayout() {
//   return (
//     <div className="bg-[#0B1120] text-hederColor3">
//       <HeaderTabs />
//       <Outlet />
//     </div>
//   );
// }
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderTabs from "../MyComponents7/HeaderTabs"; // adjust path
import SearchBar from "../MyComponents7/SearchBar"; // adjust path
import TimeFilterDropdown from "../MyComponents7/TimeFilterDropdown"; // adjust path

export default function EsportsLayout() {
  const location = useLocation();
  const showTimeFilter = location.pathname === "/esports";

  return (
    <div className="bg-[#0B1120] text-hederColor3">
      {/* Filter and Search Section */}
      <div className="p-2 space-y-4">
        {showTimeFilter && (
          <div className="flex justify-start">
            <TimeFilterDropdown />
          </div>
        )}
        <SearchBar />
      </div>
      <HeaderTabs />
      <Outlet />
    </div>
  );
}
