'use client'

import Image from "next/image"
import { Menu } from "lucide-react"
import { X } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { useRef, useState } from "react"
import Link from "next/link"

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    return (
        <div className="sticky top-0 bg-[var(--background)] w-full flex flex-row items-center justify-center py-4 sm:px-0 md:px-3 px-3 z-1 lg:opacity-90">

            <div className="max-w-[1280px] w-full flex flex-row items-center justify-start sm:gap-12 gap-0 md:px-6 px-0">
                
                <div className="flex flex-row items-center gap-3">
                    <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer"/>
                    <span className="font-sans font-bold text-lg tracking-[0.1em] cursor-pointer">Biztelepathy</span>     
                </div>

                <div className="lg:flex hidden flex-row items-center gap-6">
                    <div className="flex flex-row items-center gap-1 hovered">
                        <span className="font-sans text-md cursor-pointer">Features</span> 
                        <ChevronDown className="h-4 w-4 cursor-pointer" />
                    </div>
                     
                    <span className="font-sans text-md cursor-pointer hovered">How It Works</span> 
                    <span className="font-sans text-md cursor-pointer hovered">Docs</span> 
                    <span className="font-sans text-md cursor-pointer hovered">About</span> 
                </div>

                <div className="ml-auto lg:flex hidden flex-row items-center sm:gap-3 gap-1">
                    <Link href="/login" className="border border-gray-600 rounded-lg px-3 py-2 text-sm cursor-pointer
                        hover:border-[var(--secondary)] hover:bg-[var(--secondary)] dark:hover:text-[var(--foreground)]">Sign In</Link>
                    <span className="bg-[var(--primary)] rounded-lg rounded-lg px-3 py-2 text-sm cursor-pointer border-[var(--secondary)] text-black
                        hover:bg-[var(--secondary)] hover:border-[var(--primary)]">Get Started</span>
                </div>

                <div className="ml-auto lg:hidden flex flex-row items-center">
                    <Menu className="h-6 w-6 cursor-pointer hovered" onClick={() => setIsOpen(true)}/>
                </div>
                
            </div>

            <div ref={menuRef} className={`w-full h-screen lg:hidden flex flex-col items-start justify-start gap-3 
                bg-[var(--background)] fixed top-0 left-0 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                ${!isOpen ? "translate-x-full" : "-translate-x-0"}`}>
                
                <div className="w-full flex flex-row items-center gap-3 py-4 px-3">
                    <Image src="/Icon.png" height={32} width={32} alt="" className="cursor-pointer"/>
                    <span className="font-sans font-bold text-lg tracking-[0.1em] cursor-pointer">Biztelepathy</span>    
                    <X className="ml-auto h-6 w-6 cursor-pointer hovered" onClick={() => setIsOpen(false)}/>
                </div>
                
                <div className="w-full flex flex-col items-center py-4 px-3">

                    <div className="flex flex-row items-center justify-between gap-1 hovered border-b border-gray-800 p-3 w-full">
                        <span className="font-sans text-md cursor-pointer">Features</span> 
                        <ChevronDown className="h-4 w-4 cursor-pointer" />
                    </div>
                     
                    <span className="font-sans text-md cursor-pointer hovered border-b border-gray-800 p-3 w-full">How It Works</span> 
                    <span className="font-sans text-md cursor-pointer hovered border-b border-gray-800 p-3 w-full">Docs</span> 
                    <span className="font-sans text-md cursor-pointer hovered border-b border-gray-800 p-3 w-full">About</span> 

                </div>

                <div className="w-full bg-[var(--dark)] mt-auto flex flex-row items-center gap-3 justify-between py-4 px-3">
                    <Link href="/login" className="flex-1 text-center border border-gray-600 rounded-lg px-3 py-2 text-sm cursor-pointer">Sign In</Link>
                    <span className="flex-1 text-center bg-[var(--primary)] rounded-lg rounded-lg px-3 py-2 text-sm cursor-pointer">Get Started</span>
                </div>

            </div>  

        </div>
    )
}

export default Header   