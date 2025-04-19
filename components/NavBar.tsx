'use client'
import React, { useState } from 'react'
import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from "@/components/ui/nav-bar";
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
];

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
        <Navbar>
            {/* Desktop Nav */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navLinks} button={<ThemeToggle/>} />
            </NavBody>

            {/* Mobile Nav */}
            <MobileNav>
            <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                isOpen={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                />
            </MobileNavHeader>
            <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.link}
                    onClick={() => setMobileOpen(false)}
                    className="text-black dark:text-white text-sm font-medium"
                >
                    {link.name}
                </a>
                ))}
                <NavbarButton href="#get-started" className="mt-4">
                Get Started
                </NavbarButton>
            </MobileNavMenu>
            </MobileNav>
        </Navbar>
    </div>
  )
}
