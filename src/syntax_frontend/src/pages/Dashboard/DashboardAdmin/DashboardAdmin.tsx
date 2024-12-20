import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import admin_disable_icon from "../../../assets/images/admin_disable_icon.svg";
import admin_download from "../../../assets/images/admin_download.svg";
import admin_view_icon from "../../../assets/images/admin_view_icon.svg";
import my_template from "../../../assets/images/my_template.svg";
import white_add_icon from "../../../assets/images/white_add_icon.svg";
import Sidebar from "../Sidebar";
import DashboardAdminTop from "./DashboardAdminTop";
import DashboardAdminStat from "./DashboardAdminStat";
import AddCreditModal from "./AddCreditModal";

function DashboardAdmin() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <section className="flex font-outfit">
      <Sidebar />
      <div className="px-4 md:px-6 py-8 w-full h-screen overflow-x-auto">
        <DashboardAdminTop />
        <DashboardAdminStat />

        <div className="flex items-center justify-between mt-12 lg:pr-12">
          <div className="flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem] bg-[#E1E0F3] max-w-fit py-4 px-6 ">
            All Users
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
              <TableHead className="font-bold text-black text-base">
                User ID
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Name
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Email
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Plan
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Credits
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Last Active
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Account Status
              </TableHead>
              <TableHead className="font-bold text-black text-base">
                Templates Created
              </TableHead>
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
              <TableCell>$250.00</TableCell>
              <TableCell className="flex items-center justify-between gap-4">
                <button
                  className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]"
                  onClick={() => setIsModalVisible(true)}
                >
                  Add Credit
                  <img src={white_add_icon} alt="add icon" />
                </button>

                <button className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]">
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

        {isModalVisible && (
          <AddCreditModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            setIsModalVisible={setIsModalVisible}
          />
        )}
      </div>
    </section>
  );
}

export default DashboardAdmin;
