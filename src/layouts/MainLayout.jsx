import { useLocation } from "react-router-dom";
import GameCategoryTabs from "./GameCategoryTabs"; // Extracted from Home.jsx

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideTabs = location.pathname.startsWith("/live");

  return (
    <div>
      {!hideTabs && <GameCategoryTabs />}
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
