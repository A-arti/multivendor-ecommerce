import { MdDashboard, MdOutlinePayments } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { MdCategory } from "react-icons/md";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiChatsLight } from "react-icons/pi";
import { AiOutlineAppstoreAdd, AiOutlineAppstore, AiOutlineTag, AiOutlineShopping } from 'react-icons/ai';


export const allNav = [
    {
        id : 1,
        title : 'Dashboard',
        icon : <MdDashboard />,
        role : 'admin',
        path : '/admin/dashboard'
    },
    {
        id : 2,
        title : 'Orders',
        icon : <HiShoppingBag />,
        role : 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id : 3,
        title : 'Category',
        icon : <MdCategory />,
        role : 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id : 4,
        title : 'Sellers',
        icon : <FaUsers   />,
        role : 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id : 5,
        title : 'Payment Request',
        icon : <MdPayment />,
        role : 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id : 6,
        title : 'Deactive Sellers',
        icon : <FaUserTimes />,
        role : 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id : 7,
        title : 'Seller Request',
        icon : <FaCodePullRequest />,
        role : 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id : 8,
        title : 'Live Chat',
        icon : <IoIosChatbubbles />,
        role : 'admin',
        path: '/admin/dashboard/chat-with-sellers'
    },    
    {
        id : 9,
        title : 'Dashboard',
        icon : <MdDashboard />,
        role : 'seller',
        path: '/seller/dashboard'
    },
    {
        id : 10,
        title : 'Add Product',
        icon : <AiOutlineAppstoreAdd />,
        role : 'seller',
        path: '/seller/dashboard/add-product'
    },     
    {
        id : 11,
        title : 'All Product',
        icon : <AiOutlineAppstore />,
        role : 'seller',
        path: '/seller/dashboard/all-product'
    },
    {
        id : 12,
        title : 'Discount Product',
        icon : <AiOutlineTag />,
        role : 'seller',
        path: '/seller/dashboard/discount-product'
    },
    {
        id : 13,
        title : 'Orders',
        icon : <AiOutlineShopping />,
        role : 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id : 14,
        title : 'Payments',
        icon : <MdOutlinePayments />,
        role : 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id : 15,
        title : 'Chat-Customer',
        icon : < PiChatsLight />,
        role : 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id : 16,
        title : 'Chat-Support',
        icon : <RiCustomerService2Line />,
        role : 'seller',
        path: '/seller/dashboard/chat-support'
    }

];