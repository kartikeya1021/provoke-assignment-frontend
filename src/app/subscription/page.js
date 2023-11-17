"use client"
import { useState } from 'react'

export default function subscription() {
    const [subscription, setSubscription] = useState({
        subscriptionType : "monthly",
        subscriptionPlan : "basic",

    })
  return (
    <div>
    <div class='flex min-h-screen pt-[30px] px-[40px]'>
       <div class="min-w-full">
           <p class="text-[#00153B] text-[20px] leading-[40px] font-semibold">
               Your Subscription
           </p>
    
           <div class="mt-[30px] inline-flex border border-[#E1E3E5] shadow-[0px 1px 2px #E1E3E5] divide-[#E1E3E5] divide-x rounded-[5px]">
                <button style={{
                    backgroundColor: subscription.subscriptionType=="monthly"? 'lightblue':'white'
                }}class="bg-white hover:bg-[#F6F6F7] hover:text-[#717F87] text-[#0E1823] leading-[16px] text-[13px] font-semibold font-bold py-[15px] px-[25px] rounded-l">
                    Monthly
                </button>
                <button class="bg-white hover:bg-[#F6F6F7] hover:text-[#717F87] text-[#0E1823] text-[13px] leading-[16px] font-semibold font-bold py-[15px] px-[25px] rounded-r">
                    Yearly
                </button>
            </div>
    
            <div class="mt-[20px] grid grid-cols-3 gap-[20px]">
                <div key="1" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                    <div class="pt-[15px] px-[25px] pb-[25px]">
                        <div class="flex justify-end">
                            <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[20px]">
                                <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                    Mobile
                                </p>
                            </div>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[35px] leading-[63px] font-bold">
                                Monthly Plan - Rs 100
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-bold">
                                Video Quality  - Good
                            </p>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                               Resolution - 480p
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                              Devices you can use to watch - Phone or Tablet
                            </p>
                        </div>
                    </div>
                </div>
    
                <div key="2" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                <div class="pt-[15px] px-[25px] pb-[25px]">
                        <div class="flex justify-end">
                            <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[20px]">
                                <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                  Basic
                                </p>
                            </div>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[35px] leading-[63px] font-bold">
                                Monthly Plan - Rs 200
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-bold">
                                Video Quality  - Good
                            </p>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                               Resolution - 480p
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                              Devices you can use to watch - Phone or Tablet or Computer or TV
                            </p>
                        </div>
                    </div>
                </div>
    
                <div key="3" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                <div class="pt-[15px] px-[25px] pb-[25px]">
                        <div class="flex justify-end">
                            <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[20px]">
                                <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                    Standard
                                </p>
                            </div>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[35px] leading-[63px] font-bold">
                                Monthly Plan - Rs 500
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-bold">
                                Video Quality  - Better
                            </p>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                               Resolution - 1080p
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                            Devices you can use to watch - Phone or Tablet or Computer or TV
                            </p>
                        </div>
                    </div>
                </div>

                <div key="1" class="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
                <div class="pt-[15px] px-[25px] pb-[25px]">
                        <div class="flex justify-end">
                            <div class="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[20px]">
                                <p class="text-[#00153B] text-[12px] leading-[28px] font-bold">
                                    Premium
                                </p>
                            </div>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[35px] leading-[63px] font-bold">
                                Monthly Plan - Rs 700
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-bold">
                                Video Quality  - Best
                            </p>
                        </div>
    
                        <div>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                               Resolution - 4k+HDR
                            </p>
                            <p class="text-[#00153B] text-[25px] leading-[28px] font-medium">
                            Devices you can use to watch - Phone or Tablet or Computer or TV
                            </p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div></div>
  )
}
