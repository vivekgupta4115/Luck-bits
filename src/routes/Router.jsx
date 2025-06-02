import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AvitatorLayout from "../pages/AviatorGame/AvitatorLayout";
import ComingSoon from "../reusableComponents/ComingSoon";
import LiveHome from "../pages/Live/LiveHome";
import SportsHome from "../pages/sports/SportsHome";
import CasinoHome from "../pages/casino/CasinoHome";
import Livepage from "../MyComponent/Livepage";
import LiveCalender from "../MyComponents2/LiveCalender";
import Result from "../MyComponent3/Result";
import LiveCasino from "../MyComponents4/LiveCasino";
import GamePage from "../MyComponents5/GamePage";
import VirtualSports from "../MyComponents6/VirtualSports";
import ESports from "../MyComponents7/ESports";
import ResultEsport from "../MyComponents8/ResultEsport";
import Upcoming from "../MyComponents9/Upcoming";
import Calendar from "../MyComponents10/Calender";
import LiveLayout from "../layouts/LiveLayout";
import SportsLayout from "../layouts/SportsLayout"
import CasinoLayout from "../layouts/CasinoLayout";
import EsportsLayout from "../layouts/EsportsLayout";
import Esportlive from "../MyComponents11/Esportlive";
// import Upcoming from "../MyComponents9/Upcoming";
import CasinoHome1 from '../MyComponents12/casinoSection/CasinoHome'
import Sports from "../MyComponents12/Sports";
import LiveCalenderSports from "../MyComponents12/sportSection/LiveCalender";
import ResultSports from "../MyComponents12/sportSection/Result";
import Jackpots from "../MyComponents12/casinoSection/Jackpots"
import Tournaments from "../MyComponents12/casinoSection/Tournaments";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/", element: <CasinoHome1 /> },
      // { path: "/", element: <Sports /> },
      // { path: "/", element: <LiveCalenderSports /> },
      // { path: "/", element: <ResultSports /> },
      // { path: "/", element: <Jackpots /> },
      // { path: "/", element: <Tournaments /> },
      {
        path: "/live", // This becomes the base path
        element: <LiveLayout />, // Header2 rendered here
        children: [
          { path: "livepage", element: <Livepage /> },
          { path: "liveCalender", element: <LiveCalender /> },
          { path: "result", element: <Result /> },
        ],
      },

      {
        path: "/sports", // This becomes the base path
        element: <SportsLayout />, // Header2 rendered here
        children: [
          { path: "", element: <Sports /> },
          { path: "livepage", element: <Sports /> },
          { path: "liveCalender", element: <LiveCalenderSports /> },
          { path: "result", element: <ResultSports /> },
        ],
      },
      {
        path: "/casino", // This becomes the base path
        element: <CasinoLayout />, // Header2 rendered here
        children: [
          { path: "", element: <CasinoHome1 /> },
          { path: "jackpots", element: <Jackpots /> },
          { path: "Tournaments", element: <Tournaments /> },
        ],
      },
      {
        path: "/esports",
        element: <EsportsLayout />,
        children: [
          { path: "", element: <ESports /> }, // renders at /esports
          { path: "upcoming", element: <Upcoming /> }, // renders at /esports
          { path: "live", element: <Esportlive /> },
          { path: "result", element: <ResultEsport /> }, // renders at /esports/result
        ],
      },

      { path: "/liveCalender", element: <LiveCalender /> },
      { path: "/livepage", element: <Livepage /> },
      { path: "/result", element: <Result /> },
      { path: "/livecasino", element: <LiveCasino /> },
      { path: "/casino", element: <CasinoHome1 /> },
      { path: "/sports", element: <Sports /> },
      { path: "/gamepage", element: <GamePage /> },
      { path: "/virtualsports", element: <VirtualSports /> },
      // { path: "/esports", element: <ESports /> },
      { path: "/resultesport", element: <ResultEsport /> },
      { path: "/upcoming", element: <Upcoming /> },
      { path: "/calendar", element: <Calendar /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/aviator",
        element: <AvitatorLayout />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
      },
      // {
      //     path: "/live",
      //     element: <LiveHome />,
      // },
      {
        path: "/livepagemy",
        element: <Livepage />,
      },
      {
        path: "/sports",
        element: <SportsHome />,
      },
      {
        path: "/casino",
        element: <CasinoHome />,
      },
      {
        path: "/liveCalender",
        element: <LiveCalender />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
