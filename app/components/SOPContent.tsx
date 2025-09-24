// app/components/SOPContent.tsx

import React from 'react';
import { BsFileEarmarkText, BsFileEarmarkArrowUp, BsEye, BsTrash } from 'react-icons/bs';
import { IoCloudUploadOutline } from 'react-icons/io5';

const SOPContent: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center py-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">SOP & Policies Management</h1>
      </div>
      <p className="text-gray-600 mt-2">Manage standard operating procedures, policies, and guidelines for your organization</p>
      
      {/* Sales SOPs Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BsFileEarmarkText className="text-gray-500" />
            Sales SOPs
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">Standard operating procedures for sales processes and customer interactions</p>
            <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
                <IoCloudUploadOutline className="mx-auto w-12 h-12 text-gray-400 mb-2" />
                <p>Drag and drop files here or click to browse</p>
                <button className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Select Files
                </button>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Current Sales SOPs</h3>
                <span className="text-sm text-gray-500">2 documents</span>
            </div>
            
            {/* Document Cards */}
            <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                    <div className="flex items-center gap-4">
                        <BsFileEarmarkText className="text-2xl text-gray-400" />
                        <div>
                            <p className="font-medium">Sales Process Manual v2.1</p>
                            <p className="text-sm text-gray-500">Uploaded: 2025-08-15 • 2.5 MB</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-1 p-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                            <BsEye />
                            <span>View</span>
                        </button>
                        <button className="flex items-center gap-1 p-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                            <BsTrash />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                    <div className="flex items-center gap-4">
                        <BsFileEarmarkText className="text-2xl text-gray-400" />
                        <div>
                            <p className="font-medium">Customer Interaction Guidelines</p>
                            <p className="text-sm text-gray-500">Uploaded: 2025-08-15 • 1.0 MB</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-1 p-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                            <BsEye />
                            <span>View</span>
                        </button>
                        <button className="flex items-center gap-1 p-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                            <BsTrash />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Customer KYC/Document Upload Guidelines Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BsFileEarmarkArrowUp className="text-gray-500" />
            Customer KYC/Document Upload Guidelines
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            Guidelines for customer verification and document collection processes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SOPContent;