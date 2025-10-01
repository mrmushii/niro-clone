"user client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSidebar = () => {
  return (
    <div className="hidden lg:flex  flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href={"/"}>
        <div className="flex items-center gap-x-2">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={600}
            width={60}
            />

            <span>Niro</span>
        </div>
      </Link>
    </div>
  );
};

export default OrgSidebar;
