import { useNavigate } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { sidebarCTAs, type SidebarCtas } from "./constants";

interface AppSidebarCTAProps {
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  isMobile: boolean;
}
export const AppSidebarCTA = ({
  isMobile,
  setOpen,
  setOpenMobile,
  state,
}: AppSidebarCTAProps) => {
  const navigate = useNavigate();
  const handleClick = (item: SidebarCtas) => {
    if (!isMobile && state === "collapsed") {
      setOpen(true);
      navigate(item.path);
    } else {
      navigate(item.path);
      setOpenMobile(false);
    }
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {sidebarCTAs.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                tooltip={item.label}
                onClick={() => handleClick(item)}
              >
                <item.icon />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
