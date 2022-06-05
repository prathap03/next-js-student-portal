import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import {
    ChevronDownIcon,
    ShoppingCartIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
    AcademicCapIcon
} from "@heroicons/react/solid"
import Image from "next/image";

const Sidebar = () => {
    const { data, status } = useSession();
    console.log(useSession())
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">

            <SidebarRow src={data.user.image} title={data.user.name} />
            <SidebarRow Icon={AcademicCapIcon} title="Certificates" />
            <SidebarRow Icon={UserGroupIcon} title="Attendence" />
            {/* <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" /> */}
            <SidebarRow Icon={ChevronDownIcon} title="More" />
        </div>
    );
}

export default Sidebar;