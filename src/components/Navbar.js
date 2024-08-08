import React, { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsRouter } from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
import { MdDevicesOther } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
 // For sidebar menu
 const menus = [
    {
      name: "Dashboard",
      icon: TbLayoutDashboardFilled,
      link: "/",
    },
    {
      name: "AP",
      icon: BsRouter,
      link: "/",
    },
    {
      name: "Zone",
      icon: MdLocationCity,
      link: "/",
    },
    {
      name: "Model",
      icon: MdDevicesOther,
      link: "/",
    },
    {
      name: "User",
      icon: MdLocationCity,
      link: "/",
      margin: true,
    },
    {
      name: "Sign Up",
      icon: FiUserPlus,
      link: "/",
    },
    {
      name: "Sign In",
      icon: FaSignInAlt,
      link: "/",
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-lime-50 min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-zinc-800 px-4`}>
        <div className="py-3 flex justify-end">
          <HiAdjustmentsHorizontal
            size={24}
            className="cursor-pointer text-lime-800"
            onClick={() => setOpen(!open)}/>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, index) => (
            <Link
              to={menu.link}
              key={index}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-lime-100 rounded-md ${
                menu.margin ? "mt-5" : ""
              }`} >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open ? "opacity-0 translate-x-28" : ""
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}>
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">Body Part</div>
    </section>
  );
};

export default Navbar;
