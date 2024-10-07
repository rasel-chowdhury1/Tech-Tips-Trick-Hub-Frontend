"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { useUser } from "../context/user.provider";

import NavberDropDown from "./UI/NavberDropDown/NavberDropDown";
import { Logo } from "./icons";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";

export const Navbar = () => {
  const { user } = useUser();

  return (
    <NextUINavbar
      className="light light:bg-[#1A1A1A] dark dark:bg-[#1A1A1A] "
      maxWidth="2xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 light light:text-[#F9F9F9]"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit uppercase ">
              Gadget <span className="text-pink-500">Guru Hub</span>
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4  justify-start ml-2 uppercase font-bold ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-pink-500 transition-colors",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {user?.email ? (
          <NavbarItem className="hidden md:flex">
            <NavberDropDown />
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden md:flex">
            <Link
              className="border px-4  py-1"
              color="foreground"
              href="/login"
            >
              Log In
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
