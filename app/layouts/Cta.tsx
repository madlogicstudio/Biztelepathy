'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"

function Cta() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col items-center justify-start gap-12 my-6 md:px-6 px-0">
                
                <div className="lg:flex hidden h-[400px] w-[1260px] relative">
                    <Image src="/images/Banner.png" height={800} width={1280} className="h-full w-full" alt="" />
                    <div className="flex-2 flex flex-col items-start gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="font-sans font-bold text-[color:var(--primary)] sm:text-4xl text-3xl">Ready To Grow Your Hive?</span>
                        <span className="font-sans sm:text-lg sm:text-lg text-md text-gray-700">Start organizing your business, track your progress, and build toward your goals—all for free.</span>
                        <div className="w-[180px] flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2
                            hover:border-[var(--secondary)] hover:bg-[var(--secondary)] dark:hover:text-[var(--foreground)]">
                            <span className="sm:text-md text-sm">Request a Demo</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="w-[180px] bg-[var(--primary)] rounded-lg rounded-lg px-6 py-2 text-sm cursor-pointer border-[var(--secondary)] text-black
                            hover:bg-[var(--secondary)] hover:border-[var(--primary)] flex-1 text-center">Get Started</span>
                    </div>
                </div>
                
                <div className="lg:hidden flex h-[400px] w-full relative">
                    <Image src="/images/Banner-mobile.png" height={200} width={800} className="object-cover object-left" alt="" />
                    <div className="flex-2 flex flex-col items-start gap-6 absolute top-1/2 left-0 p-3 -translate-y-1/2">
                        <span className="font-sans font-bold text-black sm:text-4xl text-3xl">Ready To Grow Your Hive?</span>
                        <span className="font-sans sm:text-lg sm:text-lg text-md text-gray-700">Start organizing your business, track your progress, and build toward your goals—all for free.</span>
                        <div className="w-[180px] flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2
                            hover:border-[var(--secondary)] hover:bg-[var(--secondary)] dark:hover:text-[var(--foreground)]">
                            <span className="sm:text-md text-sm">Request a Demo</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="w-[180px] bg-[var(--primary)] rounded-lg rounded-lg px-6 py-2 text-sm cursor-pointer border-[var(--secondary)] text-black
                            hover:bg-[var(--secondary)] hover:border-[var(--primary)] flex-1 text-center">Get Started</span>
                    </div>
                </div>
        
            </div>

        </div>
    )
}

export default Cta