'use client'

import Image from "next/image"
import { HiveCard } from "@/components/HiveCard"
import { Store, Users, BadgeDollarSign, UserGroup, Goal, ChartNoAxesCombined, MonitorUp, Cross, SquaresUnite} from "lucide-react"
import { useState, useRef, useEffect } from "react"

function Solution() {

    const [isActive, setIsActive] = useState("");
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cardRef.current &&
                !cardRef.current.contains(event.target as Node)
            ) {
                setIsActive("")
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center sm:py-12 pb-6 sm:px-0 md:px-3 px-3">

            <div className="max-w-[1280px] w-full h-auto flex flex-col items-center justify-center gap-12 md:px-6 px-0">
                
                <div className="flex sm:flex-row flex-col items-start border border-[var(--primary)] gap-12 p-6 rounded-lg">

                    <div className="flex-1 flex flex-row items-center gap-6">    
                        <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                            <MonitorUp className="h-7 w-7" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans text-md font-semibold">Connect</span>
                            <span className="font-sans text-md text-gray-700">Bring your customers, sales, and tasks together in one workspace.</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-row items-center gap-6">    
                        <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                            <Cross className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans text-md font-semibold">Nurture</span>
                            <span className="font-sans text-md  text-gray-700">Keep your business relationships and daily operations moving smoothly.</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-row items-center gap-6">    
                        <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-3 rounded-full">
                            <SquaresUnite className="h-8 w-8" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans text-md font-semibold">Unite</span>
                            <span className="font-sans text-md  text-gray-700">Bring every part of your business together and work as one connected hive.</span>
                        </div>
                    </div>

                </div>

                <div className="w-full flex flex-col items-start gap-3">
                    <span className="font-sans font-bold text-[color:var(--primary)] sm:text-4xl text-3xl">Everything Your Hive Needs to Grow</span>
                    <span className="font-sans sm:text-lg sm:text-lg text-md text-gray-400">Get a simple overview of your business without digging through 
                        spreadsheets or switching between multiple tools.</span>
                </div>

                <div className="sm:hidden flex flex-row items-center justify-center sm:gap-6 gap-3 flex-wrap">

                    <Image src="/images/Bee-front.png" height={260} width={260} className="sm:hidden flex z-1 cursor-pointer bee-idle" alt=""/>
                    
                    <HiveCard isActive={isActive} image={<Store className="sm:h-10 sm:w-10 h-8 w-8" />}
                        title={"Business Overview"} text={"See what's happening across your business at a glance."} 
                        cardId="business" cardRef={cardRef}
                        onClick={() => setIsActive(isActive === "business" ? "" : "business")}/>
                    <HiveCard isActive={isActive} image={<Users className="sm:h-10 sm:w-10 h-8 w-8" />}
                        title={"Customer Management"} text={"Keep customer information organized and accessible."} 
                        cardId="customer" cardRef={cardRef}
                        onClick={() => setIsActive(isActive === "customer" ? "" : "customer")}/>
                    
                    
                    <HiveCard isActive={isActive} image={<BadgeDollarSign className="sm:h-10 sm:w-10 h-8 w-8" />}
                        title={"Sales Tracking"} text={"Monitor sales activity and understand performance."}
                        cardId="sales" cardRef={cardRef}
                        onClick={() => setIsActive(isActive === "sales" ? "" : "sales")} />
                    <HiveCard isActive={isActive} image={<UserGroup className="sm:h-10 sm:w-10 h-8 w-8" />}
                        title={"Customer Management"} text={"Keep customer information organized and accessible."}
                        cardId="management" cardRef={cardRef}
                        onClick={() => setIsActive(isActive === "management" ? "" : "management")} />
                    
                    <HiveCard isActive={isActive} image={<Goal className="sm:h-10 sm:w-10 h-8 w-8" />}
                        title={"Goals"} text={"Set business goals and track your achievements."} 
                        cardId="goals" cardRef={cardRef}
                        onClick={() => setIsActive(isActive === "goals" ? "" : "goals")}/>
                    <HiveCard isActive={isActive} image={<ChartNoAxesCombined className="sm:h-10 sm:w-10 h-8 w-8" />}
                        title={"Analytics"} text={"Understand your progress with simple visual insights."}
                        cardId="analytics" cardRef={cardRef}
                        onClick={() => setIsActive(isActive === "analytics" ? "" : "analytics")} />
                </div>

                <div className="w-full sm:flex hidden flex-col items-center justify-center sm:gap-0 gap-3 flex-wrap">

                    <div className="flex flex-row items-center gap-3 mb-[-66px]">
                        <HiveCard isActive={isActive} image={<Store className="sm:h-10 sm:w-10 h-8 w-8" />}
                            title={"Business Overview"} text={"See what's happening across your business at a glance."} 
                            cardId="business" cardRef={cardRef}
                            onClick={() => setIsActive(isActive === "business" ? "" : "business")}/>
                        <HiveCard isActive={isActive} image={<Users className="sm:h-10 sm:w-10 h-8 w-8" />}
                            title={"Customer Management"} text={"Keep customer information organized and accessible."} 
                            cardId="customer" cardRef={cardRef}
                            onClick={() => setIsActive(isActive === "customer" ? "" : "customer")}/>
                    </div>
                    
                    <div className="lg:w-[800px] w-full flex flex-row items-center justify-between gap-3">
                        <HiveCard isActive={isActive} image={<BadgeDollarSign className="sm:h-10 sm:w-10 h-8 w-8" />}
                            title={"Sales Tracking"} text={"Monitor sales activity and understand performance."}
                            cardId="sales" cardRef={cardRef}
                            onClick={() => setIsActive(isActive === "sales" ? "" : "sales")} />
                        <Image src="/images/Bee-front.png" height={260} width={260} className="sm:flex hidden z-1 cursor-pointer bee-idle" alt=""/>
                        <HiveCard isActive={isActive} image={<UserGroup className="sm:h-10 sm:w-10 h-8 w-8" />}
                            title={"Customer Management"} text={"Keep customer information organized and accessible."}
                            cardId="management" cardRef={cardRef}
                            onClick={() => setIsActive(isActive === "management" ? "" : "management")} />
                    </div>
                    
                    <div className="flex flex-row items-center gap-3 mt-[-66px]">
                        <HiveCard isActive={isActive} image={<Goal className="sm:h-10 sm:w-10 h-8 w-8" />}
                            title={"Goals"} text={"Set business goals and track your achievements."} 
                            cardId="goals" cardRef={cardRef}
                            onClick={() => setIsActive(isActive === "goals" ? "" : "goals")}/>
                        <HiveCard isActive={isActive} image={<ChartNoAxesCombined className="sm:h-10 sm:w-10 h-8 w-8" />}
                            title={"Analytics"} text={"Understand your progress with simple visual insights."}
                            cardId="analytics" cardRef={cardRef}
                            onClick={() => setIsActive(isActive === "analytics" ? "" : "analytics")} />
                    </div>
                    
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Solution