import { Outlet } from "react-router-dom";
import NavbarTabs from "./NavbarTabs";

export default function AppLayout() {
  return (
    <>
      <NavbarTabs />
      <Outlet />
    </>
  );
}
