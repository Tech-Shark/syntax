import React from 'react'
import faq1 from '../../assets/images/faq1.png'
import faq2 from '../../assets/images/faq2.png'
import faq3 from '../../assets/images/faq3.png'

import faq_loader from '../../assets/images/faq_loader.png'
import rhombus_icon from '../../assets/images/rhombus_icon.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


function Faq() {
  return (
    <section className='my-8'>
         <h5 className='font-bold text-4xl md:text-[3.1rem] leading-[4.42rem] lg:mb-2'>FAQs</h5>
        <p className='font-medium text-[1.67rem] leading-[2.1rem]'>Frequently Asked Questions</p>

        <div className='flex items-center justify-center w-full mt-12 h-[40.1rem] py-4'>
        <div className='w-4/5 h-full  relative'>
          <img src={faq1} alt="faq background1" className=' absolute rounded-xl shadow-lg' />
          <img src={faq2} alt="faq background1" className=' absolute rounded-lg -left-12 -rotate-12 top-4 shadow-xl ' />
          <img src={faq3} alt="faq background1" className=' absolute rounded-lg  top-3 left-[10rem] rotate-6 shadow-xl  ' />
          <div className="absolute inset-0 flex justify-between  pl-[12rem]" >

            <img src={rhombus_icon} alt="rhombus icon" className='w-[3.34rem] h-[3.34rem] self-end mb-[13rem] ml-[-8rem] ' />

            <div className='m-auto w-3/4 flex flex-col '>
             
              <Accordion type="single" collapsible className="w-full " >
                <AccordionItem value="item-1 " className="border-none">
                  <AccordionTrigger className="font-medium text-[2.1rem] leading-[2.65rem] hover:no-underline">How does Syntax's AI improve my CV?</AccordionTrigger>
                  <AccordionContent className="text-xl font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odit numquam tempora dolore laboriosam odio magnam quaerat excepturi, nesciunt libero dicta necessitatibus iste repellat quae, ut vitae a quibusdam velit!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>


              <Accordion type="single" collapsible className="w-full " >
                <AccordionItem value="item-1 " className="border-none">
                  <AccordionTrigger className="font-medium text-[2.1rem] leading-[2.65rem] hover:no-underline">How does Syntax's AI improve my CV?</AccordionTrigger>
                  <AccordionContent className="text-xl font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odit numquam tempora dolore laboriosam odio magnam quaerat excepturi, nesciunt libero dicta necessitatibus iste repellat quae, ut vitae a quibusdam velit!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>



              
            </div>


            <div className="flex justify-center items-center">
            <img src={faq_loader} alt="" className='h-2/3' />
            </div>

          </div>
        </div>
        </div>
    </section>
  )
}

export default Faq