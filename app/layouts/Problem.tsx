'use client'

import Image from "next/image"
import { Blocks, TrendingDown } from "lucide-react"
import { SlPuzzle } from "react-icons/sl"

function Problem() {
    return (
         <div className="w-full flex flex-col items-center justify-center sm:py-12 py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col sm:items-start items-start justify-start gap-12 my-6 md:px-6 px-0">
            
                {/* <div className="flex-3 w-full">
                    <Image src="/images/Web.png" height={1000} width={1000} className="sm:block hidden" alt=""/>
                    <Image src="/images/Mobile.png" height={300} width={300} className="w-full sm:hidden block" alt=""/>
                </div> */}
                <div className="flex-2 flex flex-col items-start gap-3">
                    <span className="font-sans font-bold text-[color:var(--primary)] sm:text-4xl text-3xl">Running a Small Business Isn't Easy.</span>
                    <span className="font-sans sm:text-lg sm:text-lg text-md text-gray-400">Starting a business doesn't have to mean juggling spreadsheets, notes, and disconnected tools. BizTelepathy brings your essential business 
                        activities together so you can focus on building and growing.</span>
                </div>

                <div className="max-w-[1280px] w-full h-auto flex sm:flex-row flex-col sm:items-center flex-start justify-start sm:gap-12 gap-6">

                    <div className="flex-1 flex flex-col items-center justify-center gap-3 rounded-lg p-6 border border-[var(--primary)]">    
                        <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                            <Blocks className="h-7 w-7" />
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <span className="font-sans text-lg font-semibold">Too Much to Manage</span>
                            <span className="font-sans text-md text-gray-400">Tasks, customers, sales, and goals can quickly become difficult to keep track of.</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-3 rounded-lg p-6 border border-[var(--primary)]">    
                        <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                            <TrendingDown className="h-7 w-7" />
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <span className="font-sans text-lg font-semibold">Hard to See Progress</span>
                            <span className="font-sans text-md text-gray-400">Without organized data, it's difficult to know whether your business is actually growing.</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center gap-3 rounded-lg p-6 border border-[var(--primary)]">    
                        <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                            <SlPuzzle className="h-7 w-7" />
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <span className="font-sans text-lg font-semibold">Too Many Tools</span>
                            <span className="font-sans text-md text-gray-400">Jumping between different platforms can make simple business tasks complicated.</span>
                        </div>
                    </div>

                </div>
            
            </div>

        </div>
    )
}

export default Problem
