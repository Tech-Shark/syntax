import React, { useState } from 'react'
import Sidebar from './Sidebar'
import syntax_logo2 from '../../assets/images/syntax_logo2.svg';
import new_cv from '../../assets/images/new_cv.svg';
import my_template from '../../assets/images/my_template.svg'
import template from '../../assets/images/template.svg';
import saved_cv from '../../assets/images/saved_cv.svg';
import notification from '../../assets/images/notification.svg';
import white_add_icon from '../../assets/images/white_add_icon.svg';
import admin_view_icon from '../../assets/images/admin_view_icon.svg';
import admin_disable_icon from '../../assets/images/admin_disable_icon.svg';
import admin_download from '../../assets/images/admin_download.svg';
import admin_cancel_icon from '../../assets/images/admin_cancel_icon.svg';
import download_icon from '../../assets/images/download_icon.svg'
import build_icon from '../../assets/images/build_icon.svg'
import plus_icon from '../../assets/images/plus_icon.svg'
import copy_icon from '../../assets/images/copy_icon.svg'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  
function Dashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);


  const handleClose = () => {
    setIsClosing(true); 
    setTimeout(() => {
      setIsModalVisible(false); 
      setIsClosing(false); 
    }, 500); 
  };

  return (
    <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 py-8 w-full h-screen overflow-x-auto'>

          <div className='flex justify-between w-full '>
            <h5 className='font-bold  sm:text-3xl  lg:text-[3rem]  md:leading-[4rem]'>Welcome Admin</h5>
            <ul className="hidden md:flex gap-4 items-center ">
              <li>
                <img src={new_cv} alt="new cv" className='w-[3.01rem] aspect-square cursor-pointer ' />
              </li>
              <li>
                <img src={template} alt="template" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
              <li>
                <img src={saved_cv} alt="saved cv" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
              <li>
                <img src={notification} alt="notification" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
              <li>
                <img src={syntax_logo2} alt="syntax logo" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
            </ul>
            
          </div>

          <div className='flex gap-6 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap'>
            <div className='flex gap-4 rounded-[4px] bg-black text-white py-[0.313rem] px-[0.63rem] cursor-pointer w-[8rem] items-center min-w-fit'>
              <p>Download</p>
              <img src={download_icon} alt="download icon" />
            </div>
            <button className='text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2'>Credit Management
            <img src={plus_icon} alt="add icon" />
            </button>
            <button className='text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2'>Promo Management
            <img src={plus_icon} alt="add icon" />
            </button>
            <button className='text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2'>Pricing Management
            <img src={plus_icon} alt="add icon" />
            </button>
          </div>


          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-[#E1E0F3] h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>10,542</p>

                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Total Users</p>
            </div>

            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>7,654</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Active Users</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>2,888</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Inactive Users</p>
                
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>25,642</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Templates Created</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                <p className='font-bold text-[2.5rem] leading-[3rem]'>4,320,000</p>
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Last Updated CV</p>
            </div>

          </div>
          <div className="flex items-center justify-between mt-12 lg:pr-12">
          <div className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem] bg-[#E1E0F3] max-w-fit py-4 px-6 '>All Users
            <img src={my_template} alt="" />
          </div> 
          <button className="flex items-center gap-4 bg-black text-white py-[0.413rem] px-[1.03rem] rounded-[24.05px]">
          Download  
          <img src={admin_download} alt="download icon" />
          </button>    
        </div>  
<Table className=" mt-12">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow className="">
      <TableHead className="font-bold text-black text-base">User ID</TableHead>
      <TableHead className="font-bold text-black text-base">Name</TableHead>
      <TableHead className="font-bold text-black text-base">Email</TableHead>
      <TableHead className="font-bold text-black text-base">Plan</TableHead>
      <TableHead className="font-bold text-black text-base">Credits</TableHead>
      <TableHead className="font-bold text-black text-base">Last Active</TableHead>
      <TableHead className="font-bold text-black text-base">Account Status</TableHead>
      <TableHead className="font-bold text-black text-base">Templates Created</TableHead>
      {/* <TableHead className="text-right">Amount</TableHead> */}
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="">
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell >$250.00</TableCell>
      <TableCell className='flex items-center justify-between gap-4'>
      
  
  <button className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]" 
  onClick={() => setIsModalVisible(true)}>
          Add Credit
        <img src={white_add_icon} alt="add icon" />
      </button>

        <button className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]" 
        
>
          View
        <img src={admin_view_icon} alt="add view icon" />
        </button>
        <button className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]">
          Disable
        <img src={admin_disable_icon} alt="add disable icon" />
        </button>
       

      </TableCell>
    </TableRow>
  </TableBody>
</Table>
   
   {/* Modal */}
   {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={handleClose}

          ></div>

          {/* Modal Content */}
          <div className={`lg:w-[46.44rem] bg-white rounded-[5px] py-[1.25rem] pb-8 px-[2.5rem] border-[3px] border-black flex flex-col z-50 transform transition-transform duration-500 ease-in-out ${
              isClosing ? "animate-slide-down" : "animate-slide-up"
            }`}>
            <div className="flex justify-between md:pl-6">
              <h5 className="font-bold text-[1.5rem] leading-[1.89rem]">
                User Details
              </h5>
              <img
                src={admin_cancel_icon}
                alt="cancel icon"
                className="cursor-pointer"
                onClick={handleClose}

              />
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-10 mt-8">
              <div className="relative flex flex-col gap-2">
                <label className="font-bold text-[1rem] leading-[1.73rem]">
                  User ID
                </label>
                <input
                  type="text"
                  className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
                />
                <img
                  src={copy_icon}
                  alt="copy icon"
                  className="w-[1.5rem] aspect-square absolute right-4 bottom-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[1rem] leading-[1.73rem]">
                  John Doe
                </label>
                <input
                  type="text"
                  className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[1rem] leading-[1.73rem]">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[1rem] leading-[1.73rem]">
                  Plan
                </label>
                <input
                  type="text"
                  className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
                />
              </div>
              <div className="flex flex-col gap-2 h-[6.63rem] bg-[#E1E0F3] rounded-[7.75px]"></div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[1rem] leading-[1.73rem]">
                  Templates Created
                </label>
                <input
                  type="text"
                  className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
                />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]">
                <h5 className="text-white font-semibold text-[0.93rem] leading-[1.73rem]">
                  Done
                </h5>
                <img
                  src={build_icon}
                  alt="build icon"
                  className="w-[3.11rem] h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
    </section>
  )
}

export default Dashboard