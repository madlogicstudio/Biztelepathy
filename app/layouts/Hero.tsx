'use client'

import { ArrowRight, Brain, Sprout } from "lucide-react"
import { CgBee } from "react-icons/cg"
import Image from "next/image"

function Hero() {
    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-0 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex lg:flex-row flex-col sm:items-center flex-start justify-start sm:gap-12 gap-3 md:px-6 px-0 my-0 sm:my-12">

                <div className="flex-1 flex flex-col justify-center sm:gap-6 gap-0">

                    <div className="flex flex-col lg:text-left text-center">
                        <span className="font-sans sm:text-5xl text-4xl text-gray-700">Be Wise.</span>      
                        <span className="font-sans font-bold text-[color:var(--primary)] sm:text-6xl text-5xl">Grow Your Hive.</span> 
                    </div> 
                    
                    <div className="lg:flex hidden flex-row gap-3">
                        <div className="flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2
                            hover:border-[var(--secondary)] hover:bg-[var(--secondary)] dark:hover:text-[var(--background)]">
                            <span className="sm:text-md text-sm">Request a Demo</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        
                        <span className="bg-[var(--primary)] rounded-lg rounded-lg px-6 py-2 text-sm cursor-pointer border-[var(--secondary)] text-black
                            hover:bg-[var(--secondary)] hover:border-[var(--primary)]">Get Started</span>
                    </div> 

                    <div className="flex-1 lg:flex hidden flex-col items-start justify-start">

                        <div className="flex flex-col gap-3">
                            <span className="font-sans sm:text-lg text-md text-gray-700">A Free business management for small businesses ready to grow.</span>
                            <span className="font-sans sm:text-lg text-md text-gray-700">BizTelepathy gives you simple tools to organize your business, manage daily operations, track progress, and make smarter decisions—all in one place.</span>
                            <span className="font-sans sm:text-lg text-md text-gray-700">Completely Free • No subscriptions • No hidden fees</span>
                        </div>

                    </div>

                </div>

                <Image src="/images/Hero.png" height={700} width={700} className="md:hidden flex hero-idle" alt=""/>
                <Image src="/images/Hero.png" height={600} width={600} className="md:flex hidden hero-idle" alt=""/>

                <div className="flex-1 lg:hidden flex flex-col items-start justify-start md:my-0 my-6">

                    <div className="flex flex-col gap-3 text-center">
                        <span className="font-sans sm:text-lg text-md text-gray-700">Smart business management for small businesses ready to grow.</span>
                        <span className="font-sans sm:text-lg text-md text-gray-700">BizTelepathy gives you simple tools to organize your business, manage daily operations, track progress, and make smarter decisions—all in one place.</span>
                        <span className="font-sans sm:text-lg text-md text-gray-700">Completely Free <br/> No subscriptions <br/> No hidden fees</span>
                    </div>

                </div>

                <div className="lg:hidden flex flex-row gap-3">
                    <div className="flex flex-row items-center gap-2 border border-gray-600 rounded-lg cursor-pointer px-6 py-2
                        hover:border-[var(--secondary)] hover:bg-[var(--secondary)] dark:hover:text-[var(--foreground)]">
                        <span className="sm:text-md text-sm">Request a Demo</span>
                        <ArrowRight className="h-4 w-4" />
                    </div>
                    
                    <span className="bg-[var(--primary)] rounded-lg rounded-lg px-6 py-2 text-sm cursor-pointer border-[var(--secondary)] text-black
                        hover:bg-[var(--secondary)] hover:border-[var(--primary)] flex-1 text-center">Get Started</span>
                </div> 

            </div> 

            <div className="max-w-[1280px] w-full h-auto flex sm:flex-row flex-col sm:items-center flex-start justify-start gap-12 p-6 my-12
                border border-[var(--primary)] rounded-lg">

                <div className="flex-1 flex flex-row items-center gap-6">    
                    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                        <CgBee className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans text-md font-semibold">Organize</span>
                        <span className="font-sans text-md text-gray-700">Keep your business information and activities in one place.</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-row items-center gap-6">    
                    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                        <Brain className="h-8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans text-md font-semibold">Understand</span>
                        <span className="font-sans text-md  text-gray-700">Turn your business data into useful insights.</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-row items-center gap-6">    
                    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                        <Sprout className="h-8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sans text-md font-semibold">Grow</span>
                        <span className="font-sans text-md  text-gray-700">Track progress and work toward meaningful goals.</span>
                    </div>
                </div>

            </div>

            

        </div>
    )
}

export default Hero