import React from "react";
import Header2 from "../MyComponent/Header2";
import { Outlet } from "react-router-dom";

export default function SportsLayout() {
  return (
    <div>
      <Header2 />
      <Outlet /> {/* Renders nested route content here */}
    </div>
  );
}
