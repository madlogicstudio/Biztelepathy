'use client'

import { Check, Gem } from "lucide-react"

function Free() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex sm:flex-row flex-col sm:items-center items-start justify-start gap-12 my-6 md:px-6 px-0">
                
                <div className="flex-1 w-full flex flex-col items-start gap-3">
                    <span className="font-sans font-bold text-[color:var(--primary)] sm:text-4xl text-3xl">Your Business Can Grow Without Growing Your Expenses</span>
                    <span className="font-sans sm:text-lg sm:text-lg text-md text-gray-700">BizTelepathy is built to give small businesses access to useful business management tools without adding another monthly bill.</span>
                </div>

                <div className="flex-1 sm:w-auto w-full flex flex-row items-center justify-start gap-3 rounded-lg sm:p-12 p-6 bg-[var(--secondary)]">    

                    <div className="flex-2 flex flex-col items-start justify-start gap-3">
                        <span className="font-sans font-bold sm:text-4xl text-3xl mb-3">100% Free</span> 
                        <div className="flex flex-row items-center text-center gap-3">
                            <Check className="h-6 w-6 text-gray-700" />
                            <span className="font-sans text-md font-semibold text-gray-700">No monthly subscription</span>  
                        </div>
                        <div className="flex flex-row items-center text-center gap-3">
                            <Check className="h-6 w-6 text-gray-700" />
                            <span className="font-sans text-md font-semibold text-gray-700">No paid plans</span>  
                        </div>
                        <div className="flex flex-row items-center text-center gap-3">
                            <Check className="h-6 w-6 text-gray-700" />
                            <span className="font-sans text-md font-semibold text-gray-700">No hidden fees</span>  
                        </div>
                        <div className="flex flex-row items-center text-center gap-3">
                            <Check className="h-6 w-6 text-gray-700" />
                            <span className="font-sans text-md font-semibold text-gray-700">No complicated pricing</span>  
                        </div>
                    </div>
                    <Gem className="sm:flex-1 hidden h-32 w-32" />
                </div>

            </div>

        </div>
    )
}

export default Free