import React from "react";
import useWindowDimensions from "../../lib/custom-hooks/useWindowDimensions";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

export default function SidebarContainer() {
  const { width } = useWindowDimensions();

  return <>{width > 780 ? <Sidebar /> : <MobileSidebar />}</>;
}
