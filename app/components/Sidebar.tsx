// app/components/Sidebar.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsBuildingsFill, BsPersonFill } from 'react-icons/bs';
import { IoLogOutOutline } from 'react-icons/io5';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-64 bg-white p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <BsBuildingsFill className="text-xl" />
          <span className="text-lg font-semibold">Sales Admin Panel</span>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                href="/"
                className={`flex items-center gap-3 p-3 rounded-md ${
                  pathname === '/' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <BsBuildingsFill />
                Our projects
              </Link>
            </li>
            <li>
              <Link
                href="/sop"
                className={`flex items-center gap-3 p-3 rounded-md ${
                  pathname === '/sop' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <BsBuildingsFill />
                SOP & Policies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center gap-2 mb-2">
            <BsPersonFill className="text-xl" />
            <span className="font-medium">Admin Sales</span>
          </div>
          <p className="text-sm text-gray-500">admin.sales@property.com</p>
        </div>
        <button className="mt-4 text-sm text-red-500 hover:underline flex items-center gap-1">
          <IoLogOutOutline className="inline-block" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;