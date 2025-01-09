import { useState } from 'react'
import Sidebar from '../Sidebar';
import DashboardWelcome from './dashboardWelcome';
import DashBoardAction from './dashboardActions';
import DashboardFilter from './dashboardFilter';
import AdminTable from './adminTable';
import UserModal from './viewUserModal';

  
  const mockData = [
  {
    userId: "INV001",
    name: "John Doe",
    email: "john.doe@example.com",
    plan: "Premium",
    credits: "100",
    lastActive: "2023-12-01",
    accountStatus: "active" as "active" | "inactive",
    templatesCreated: "12",
  },
  {
    userId: "INV002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    plan: "Basic",
    credits: "50",
    lastActive: "2023-11-20",
    accountStatus: "inactive" as "inactive" | "active",
    templatesCreated: "5",
  },
  {
    userId: "INV003",
    name: "Jane Doe",
    email: "jane.smith@example.com",
    plan: "Basic",
    credits: "150",
    lastActive: "2023-11-25",
    accountStatus: "active" as "active" | "inactive",
    templatesCreated: "5",
  },
  ];
  

const AdminDashboard: React.FC = () => {
const [isModalVisible, setIsModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handlevViewUser = (userId: string) => {
    const user = mockData.find((user) => user.userId === userId);
    if (user) {
      setSelectedUser(user);
      setIsModalVisible(true);
    }
  };

  const handleAddCredit = (userId: string) => {
    console.log(`Add credit for user: ${userId}`);
  };

  const handleDisable = (userId: string) => {
    console.log(`Disable account for user: ${userId}`);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsClosing(false);
      setSelectedUser(null); // Clear selected user when modal closes
    }, 500);
  };

  const handleCopy = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }
  };

  return (
    <section className='flex font-outfit'>
      <Sidebar />
      <div className='px-4 md:px-6 py-8 w-full h-screen overflow-x-auto'>
        <DashboardWelcome />
        <DashBoardAction />
        <DashboardFilter />

 
         {/* Table */}
        <AdminTable
          data={mockData}
          onAddCredit={handleAddCredit}
          onView={handlevViewUser}
          onDisable={handleDisable}
        />

        {/* Modal */}
      <UserModal
          isModalVisible={isModalVisible}
          isClosing={isClosing}
          selectedUser={selectedUser}
          onClose={handleClose}
          onCopy={handleCopy}
        />
      </div>
    </section>
  )
}

export default AdminDashboard;