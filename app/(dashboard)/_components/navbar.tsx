"use client";

import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
  
} from "@clerk/nextjs";
import SearchInput from "./SearchInput";
import InviteButton from "./InviteButton";


const Navbar = () => {
  const {organization} = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5">
      {/* Search input only on large screens */}
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>

      {/* Organization Switcher (mobile only) */}
      <div className="block lg:hidden flex-1 max-w-[240px]">
        <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements:{
            rootBox:{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:"100%",
              maxWidth:"376px"
            },
            organizationSwitcherTrigger:{
              padding:"6px",
              width:"100%",
              borderRadius:"8px",
              border:"1px solid #E5E7EB",
              justifyContent:"space-between",
              backgroundColor:"white"
            }
          }
        }}/>
      </div>

      {organization && <InviteButton />}

      <UserButton />
    </div>
  );
};

export default Navbar;
