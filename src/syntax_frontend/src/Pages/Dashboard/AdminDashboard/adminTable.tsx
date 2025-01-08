import white_add_icon from '@/assets/images/white_add_icon.svg';
import admin_view_icon from '@/assets/images/admin_view_icon.svg';
import admin_disable_icon from '@/assets/images/admin_disable_icon.svg';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface UserData {
  userId: string;
  name: string;
  email: string;
  plan: string;
  credits: string;
  lastActive: string;
  accountStatus: "active" | "inactive";
  templatesCreated: string;
}

interface TableProps {
  data: UserData[];
  onAddCredit: (userId: string) => void;
  onView: (userId: string) => void;
  onDisable: (userId: string) => void;
}

const AdminTable: React.FC<TableProps> = ({ data, onAddCredit, onView, onDisable }) => {
  return (
    <Table className="mt-12">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="font-bold text-black text-base w-max">User ID</TableHead>
          <TableHead className="font-bold text-black text-base">Name</TableHead>
          <TableHead className="font-bold text-black text-base">Email</TableHead>
          <TableHead className="font-bold text-black text-base">Plan</TableHead>
          <TableHead className="font-bold text-black text-base">Credits</TableHead>
          <TableHead className="font-bold text-black text-base">Last Active</TableHead>
          <TableHead className="font-bold text-black text-base">Account Status</TableHead>
          <TableHead className="font-bold text-black text-base">Templates Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.userId} className="">
            <TableCell className="font-medium">{user.userId}</TableCell>
            <TableCell className='w-auto'>{user.name}</TableCell>
            <TableCell className='w-auto'>{user.email}</TableCell>
            <TableCell className='w-auto'>{user.plan}</TableCell>
            <TableCell className='w-auto'>{user.credits}</TableCell>
            <TableCell className='w-auto'>{user.lastActive}</TableCell>
            <TableCell className="flex items-center gap-2">
              {user.accountStatus}
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  user.accountStatus === "active" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </TableCell>
            <TableCell>{user.templatesCreated}</TableCell>
            <TableCell className="flex items-center justify-between gap-4">
              <button
                className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]"
                onClick={() => onAddCredit(user.userId)}
              >
                Add Credit
                <img src={white_add_icon} alt="Add icon" />
              </button>
              <button
                className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]"
                onClick={() => onView(user.userId)}
              >
                View
                <img src={admin_view_icon} alt="View icon" />
              </button>
              {user.accountStatus === "active" && (
                <button
                  className="flex items-center gap-2 whitespace-nowrap bg-black text-white rounded-[53px] py-[0.5rem] px-4 font-semibold text-[0.75rem] leading-[1.73rem]"
                  onClick={() => onDisable(user.userId)}
                >
                  Disable
                  <img src={admin_disable_icon} alt="Disable icon" />
                </button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminTable;
