import { Link } from "react-router-dom";
import { LogoIcon, LogoWordMark } from "../logo";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

interface AppSidebarHeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  isMobile: boolean;
}

export const AppSidebarHeader = ({
  open,
  isMobile,
  setOpen,
  setOpenMobile,
  state,
}: AppSidebarHeaderProps) => {
  const handleClick = () => {
    if (!isMobile && state === "collapsed") {
      setOpen(true);
    } else {
      setOpenMobile(false);
    }
  };
  return (
    <SidebarMenu>
      <Link to="/" onClick={handleClick}>
        <SidebarMenuItem className="focus:bg-transparent">
          <SidebarMenuButton
            size={open ? "lg" : "sm"}
            className="hover:bg-transparent focus:bg-transparent"
          >
            {!open && <LogoIcon />}
            <LogoWordMark classname="w-32" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Link>
    </SidebarMenu>
  );
};
