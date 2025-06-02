import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AvitatorLayout from "../pages/AviatorGame/AvitatorLayout";
import AviatorHome from "../pages/AviatorGame/AviatorHome";
import MobileFooter from "../components/MobileFooter";
import { useState } from "react";
import useProfile from "../services/gameApi";
import { currency } from "../features/kits";
import BetSlipHome from "../pages/betSlips/BetSlipHome";
import MenuList from "../pages/menu/MenuList";
import GameCategoryTabs from "./GameCategoryTabs";
// import ScrollToTopButton from "./reusable_component/ScrollToTopButton";

const Layout = () => {
    const location = useLocation();
    const bgColor = location?.pathname === "/" ? "bg-bg1" : "bg-bg1";
    const [activeModal, setActiveModal] = useState(null);
    const hiddenFooterPaths = new Set(["/login", "/register"]);
    const hiddenHeaderPaths = new Set(["/login", "/register"]);
    const visibleFooterPaths = new Set(["/", "/profile"]);
    const visibleHeaderPaths = new Set(["/", "/profile"]);
    const userId = localStorage.getItem("userId");
    const { myDetails } = useProfile(userId);
    const footerDisplay = hiddenFooterPaths.has(location?.pathname)
        ? "hidden"
        : visibleFooterPaths.has(location?.pathname)
            ? "block"
            : "hidden";

            const headerDisplay = hiddenHeaderPaths.has(location?.pathname)
              ? "hidden"
              : "block";
          

    const outletPadding = location?.pathname === "/" ? "pb-5" : "pb-0";

    // const isLivePath = location.pathname.startsWith("/live");
    // const isLivePath = /^\/live(\/|$)/.test(location.pathname);
    const isExcludedPath = /^\/(live|sports|casino)(\/|$)/.test(
      location.pathname
    );



    return (
      <>
        {location?.pathname === "/aviator" ? (
          <AvitatorLayout component={<AviatorHome />} />
        ) : (
          <div className="flex h-[100dvh]">
            <div
              //   className={`${bgColor} shrink-0 bg-mainBg flex flex-col h-screen overflow-hidden  w-full text-white `}
              className={`${bgColor} shrink-0 bg-mainBg flex flex-col min-h-screen overflow-auto w-full text-white`}
            >
              <div
                className={`h-[3.22rem]  w-full z-50 fixed top-0 ${headerDisplay}`}
              >
                <Header />
              </div>
              {/* Game Category Tabs (except on /live) */}
              {!isExcludedPath && (
                <div className="z-40 mt-[3.22rem]">
                  <GameCategoryTabs />
                </div>
              )}
              <div
                className={`flex-1 overflow-auto ${
                  headerDisplay === "hidden" ? "mt-0" : "mt-0"
                } hide-scrollbar  pb-${outletPadding}`}
              >
                <Outlet />
                <div className={`w-full bg-transparent ${footerDisplay}`}>
                  <Footer />
                </div>
              </div>
              <div className="h-[3.5rem] bg-[#041027] flex items-center lg:hidden w-full z-50 relative bottom-0">
                <MobileFooter onOpenModal={setActiveModal} />
              </div>
            </div>

            {/* FULLSCREEN MODALS */}
            {activeModal === "betSlip" && (
              <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                <div className="w-full h-full bg-mainBg text-white p-2">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-xsm ">
                      {myDetails?.data?.wallet}
                      {currency?.uae}
                    </h1>
                    <button
                      onClick={() => setActiveModal(null)}
                      className=" text-3xl text-textGray2 hover:text-white "
                    >
                      &times;
                    </button>
                  </div>
                  <BetSlipHome />
                </div>
              </div>
            )}

            {activeModal === "menu" && (
              <div className="fixed inset-0 bg-opacity-80 z-50 flex items-end justify-center">
                {/* <Header /> */}
                <div className="w-full h-full bg-mainBg text-white">
                  <div className="flex items-center justify-between border-bg2 border-b-[0.5px] p-2">
                    <h1 className="text-sm ">MENU</h1>
                    <button
                      onClick={() => setActiveModal(null)}
                      className=" text-3xl text-white hover:text-white "
                    >
                      &times;
                    </button>
                  </div>
                  <MenuList />
                </div>
              </div>
            )}
          </div>
        )}
        {/* <ScrollToTopButton /> */}
      </>
    );
};

export default Layout;
