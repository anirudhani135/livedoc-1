import React, { ReactNode } from "react";
import { FaRegUser, FaRegListAlt, FaRegComments, FaRegChartBar, FaRegCalendarAlt, FaPlus } from "react-icons/fa";
import { FiHome, FiSettings, FiFileText, FiCalendar, FiPlusCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

const navItems = [
  { icon: <FiHome className="w-5 h-5" />, label: "Home" },
  { icon: <FiFileText className="w-5 h-5" />, label: "Documents" },
  { icon: <FiCalendar className="w-5 h-5" />, label: "Calendar" },
  { icon: <FiSettings className="w-5 h-5" />, label: "Settings" },
];

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <div className="min-h-screen w-full bg-gradient-to-br from-[#f0f0f4] to-[#e8e8f0] flex">
    {/* Sidebar */}
    <aside className="flex flex-col items-center py-6 px-2 bg-white min-h-screen w-[80px]">
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-[#f0f0f4] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#333" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <nav className="flex flex-col gap-8 flex-1 items-center">
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#333] hover:bg-[#f0f0f4] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-[#333] ${index === 0 ? 'bg-[#f0f0f4]' : 'bg-white hover:bg-[#f0f0f4]'} transition-colors`}
            aria-label={item.label}
          >
            {item.icon}
          </button>
        ))}
      </nav>
      <button
        className="mt-8 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#333] hover:bg-[#f0f0f4] transition-colors"
        aria-label="User settings"
      >
        <FaRegUser className="w-5 h-5" />
      </button>
    </aside>
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-transparent">
        <div className="flex items-center gap-4">
          <span className="font-bold text-xl tracking-tight text-[#333]">Intellecta</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
            <div className="w-5 h-5 text-[#333]">
              <IoMdSunny className="w-full h-full" />
            </div>
            <div className="w-5 h-5 text-[#333]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="px-8 pt-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-[#333]">Good morning, Mike!</h1>
            <p className="text-[#777] mt-1">Let's make this day productive.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-xl font-bold text-[#333]">2,543</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs text-[#777]">Tasks done</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-xl font-bold text-[#333]">82%</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs text-[#777]">Hours saved</span>
            </div>
            <button
              className="ml-4 px-5 py-2.5 bg-[#333] text-white rounded-full flex items-center gap-2 hover:bg-[#444] transition-colors"
              aria-label="Add task"
            >
              <FiPlusCircle className="w-4 h-4" /> Add task
            </button>
          </div>
        </div>
      </div>
      {/* Main Grid */}
      <main className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 p-8">
        {children}
      </main>
    </div>
  </div>
);

// Default export: Index page using DashboardLayout and detailed cards
const Index = () => (
  <DashboardLayout>
    {/* Chat Assistant Card */}
    <section className="bg-white rounded-2xl shadow-sm p-6 flex flex-col" aria-label="Greeting and Assistant Chat">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-3">
          <button className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="2" />
              <path d="M12 8V16M8 12H16" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-start mb-6">
        <div className="w-10 h-10 rounded-full bg-[#e0e0ff] flex items-center justify-center mr-4 mt-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#6366f1" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6366f1" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium mb-1">Hi there! I'm a virtual assistant.</p>
          <p className="text-sm text-[#555]">How can I help you today?</p>
          <div className="text-xs text-[#999] mt-1">9:32</div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Write a message" 
            className="w-full py-3 px-4 bg-[#f5f5f5] rounded-full text-sm focus:outline-none" 
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button className="text-[#777] hover:text-[#333]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.44 11.05L9.75 3.5C9.55 3.34 9.28 3.5 9.28 3.77V20.23C9.28 20.5 9.55 20.66 9.75 20.5L21.44 12.94C21.6 12.78 21.6 11.21 21.44 11.05Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="text-[#777] hover:text-[#333]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="text-[#777] hover:text-[#333]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 12H8.01M12 12H12.01M16 12H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Activity Timeline Card */}
    <section className="bg-white rounded-2xl shadow-sm p-6 flex flex-col" aria-label="Activity Timeline">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[#333]">My activity</h2>
        <div className="flex items-center">
          <button className="p-1">
            <IoCalendarOutline className="w-5 h-5 text-[#333]" />
          </button>
        </div>
      </div>
      <p className="text-sm text-[#777] mb-4">What is waiting for you today</p>
      
      <div className="relative mt-2">
        <div className="flex items-center justify-between text-xs text-[#777] mb-2">
          <span>07:00</span>
          <span>08:00</span>
          <span>09:00</span>
          <span>10:00</span>
          <span>11:00</span>
          <span>12:00</span>
          <span>01:00</span>
          <span>02:00</span>
        </div>
        
        <div className="relative h-[180px]">
          {/* Timeline marker */}
          <div className="absolute top-0 left-[50%] h-full w-[2px] bg-[#333]">
            <div className="absolute top-[40%] left-0 w-3 h-3 bg-[#333] rounded-full transform -translate-x-1/2"></div>
          </div>
          
          {/* Project onboarding event */}
          <div className="absolute top-[15%] left-[15%] w-[40%] py-2 px-3 rounded-lg bg-[#e8f5c8] text-[#333]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Project onboarding</p>
                <p className="text-xs text-[#555]">Google Meeting</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#c8e8a0] flex items-center justify-center ml-[-8px] text-xs border-2 border-white">+2</div>
              </div>
            </div>
          </div>
          
          {/* Design research event */}
          <div className="absolute top-[40%] left-[55%] w-[35%] py-2 px-3 rounded-lg bg-[#e0e0e0] text-[#333]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Design research</p>
                <p className="text-xs text-[#555]">Figma file</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#e0e0e0] flex items-center justify-center ml-[-8px] text-xs border-2 border-white">+5</div>
              </div>
            </div>
          </div>
          
          {/* Coffee break event */}
          <div className="absolute top-[70%] left-[75%] w-[25%] py-2 px-3 rounded-lg bg-[#d8d0f0] text-[#333]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Coffee break</p>
                <p className="text-xs text-[#555]">Costco Cafe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* To-Do List Card */}
    <section className="bg-white rounded-2xl shadow-sm p-6 flex flex-col" aria-label="To-Do List">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-[#333]">To-do list</h2>
        <button>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M12 5V19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-[#777] mb-4">Wednesday, 11 May</p>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-[#f5f5f5] rounded-lg">
          <div className="flex-1">
            <div className="flex items-center">
              <span className="text-sm font-medium line-through text-[#777]">Client Review & Feedback</span>
            </div>
            <p className="text-xs text-[#999]">Landing page redesign</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-[#e0e0e0] flex items-center justify-center text-[#333] mr-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex">
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white ml-[-8px]">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-sm text-[#777]">
        <div className="flex items-center justify-between">
          <span>Today</span>
          <span>10:00 PM - 11:45 PM</span>
        </div>
      </div>
    </section>

    {/* Summary Performance Card */}
    <section className="bg-white rounded-2xl shadow-sm p-6 flex flex-col" aria-label="Summary Performance">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-[#333]">Summary</h2>
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <BsThreeDots className="w-4 h-4" />
          </button>
          <button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H21M21 3V9M21 3L14 10M10 21H4M4 21V15M4 21L11 14" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-sm text-[#777] mb-4">Track your performance</p>
      
      <div className="flex-1 relative">
        <div className="absolute left-0 bottom-0 text-xs text-[#777]">300</div>
        <div className="absolute left-0 bottom-[33%] text-xs text-[#777]">400</div>
        
        {/* Performance Chart */}
        <div className="h-[180px] w-full mt-6 relative">
          <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C50,70 100,90 150,60 C200,30 250,50 300,20 C350,40 400,10 400,10" stroke="#e0e0e0" strokeWidth="2" fill="none" />
            <path d="M0,80 C50,70 100,90 150,60 C200,30 250,50 300,20" stroke="#333" strokeWidth="2" fill="none" />
            
            {/* Data points */}
            <circle cx="0" cy="80" r="3" fill="#fff" stroke="#333" strokeWidth="1" />
            <circle cx="100" cy="90" r="3" fill="#fff" stroke="#333" strokeWidth="1" />
            <circle cx="150" cy="60" r="3" fill="#fff" stroke="#333" strokeWidth="1" />
            <circle cx="200" cy="30" r="3" fill="#fff" stroke="#333" strokeWidth="1" />
            <circle cx="250" cy="50" r="3" fill="#fff" stroke="#333" strokeWidth="1" />
            <circle cx="300" cy="20" r="3" fill="#fff" stroke="#333" strokeWidth="1" />
            
            {/* Highlighted data point */}
            <g transform="translate(300,20)">
              <circle r="6" fill="#333" />
              <text x="0" y="-15" textAnchor="middle" fill="#333" fontSize="10">203</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  </DashboardLayout>
);

export default Index;
