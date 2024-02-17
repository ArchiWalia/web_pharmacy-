import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { GiHistogram } from "react-icons/gi";
import { RiWalletLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; 
import Dashboard from '../pages/Dashboard';
import Stock from '../pages/Stock';
import Salesmanagement from '../pages/Salesmanagement';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';

function Sidebar() {
    const [selectedOption, setSelectedOption] = useState("dashboard");

    const renderDashboardContent = () => {
        switch (selectedOption) {
            case "dashboard":
                return <Dashboard />;
            case "stock":
                return <Stock />;
            case "sales":
                return <Salesmanagement />;
            case "profile":
                return <Profile />;
            case "logout":
                return <Logout />;
            default:
                return null;
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-primary-color dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <span className="ms-3">Pharmili</span>
                            <hr />
                        </li>

                        <li>
                            <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => handleOptionClick("dashboard")}>
                                <FaHome />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/stock" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => handleOptionClick("stock")}>
                                <GiHistogram />
                                <span className="flex-1 ms-3 whitespace-nowrap">Stock</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sales" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => handleOptionClick("sales")}>
                                <RiWalletLine />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sales Management</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => handleOptionClick("profile")}>
                                <IoPerson />
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => handleOptionClick("logout")}>
                                <IoLogOutSharp />
                                <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="ml-64">
                {renderDashboardContent()}
            </div>
        </div>
    )
}

export default Sidebar;
