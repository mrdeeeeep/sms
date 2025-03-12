
import { useState } from 'react';
import { Upload, Calendar } from 'lucide-react';
import Header from '../components/Header';
import FormSection from '../components/FormSection';

const NewAdmission = () => {
  const [activeTab, setActiveTab] = useState('newAdmission');

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <Header />

      <div className="px-6 py-4">
        <div className="flex border-b border-sms-border animate-slide-in">
          <button 
            className={`sms-tab ${activeTab === 'dashboard' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`sms-tab ${activeTab === 'newAdmission' ? 'active' : ''}`} 
            onClick={() => setActiveTab('newAdmission')}
          >
            New Admission
          </button>
        </div>

        <div className="py-6">
          <form>
            <FormSection title="Personal Information">
              <div className="mb-6">
                <label className="block mb-3 text-base font-medium">Upload Profile Picture</label>
                <div className="sms-upload-area max-w-xs">
                  <div className="mb-3 text-gray-400">
                    <Upload size={28} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-center text-gray-500">
                    Browse and choose the files you want to upload from your computer
                  </p>
                  <label className="mt-4">
                    <span className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-sms-blue rounded-md cursor-pointer hover:bg-blue-600 transition-colors">
                      <span className="mr-2">+</span> Upload
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fullName" className="block mb-1 text-sm font-medium">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter full name"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="dob" className="block mb-1 text-sm font-medium">
                    Date of Birth<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="dob"
                      placeholder="Select date"
                      className="sms-input pr-10"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Calendar size={18} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="gender" className="block mb-1 text-sm font-medium">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <select id="gender" className="sms-select">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bloodGroup" className="block mb-1 text-sm font-medium">
                    Blood Group
                  </label>
                  <select id="bloodGroup" className="sms-select">
                    <option value="">Select Blood Group</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="religion" className="block mb-1 text-sm font-medium">
                    Religion<span className="text-red-500">*</span>
                  </label>
                  <select id="religion" className="sms-select">
                    <option value="">Select religion</option>
                    <option value="christianity">Christianity</option>
                    <option value="islam">Islam</option>
                    <option value="hinduism">Hinduism</option>
                    <option value="buddhism">Buddhism</option>
                    <option value="judaism">Judaism</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="motherTongue" className="block mb-1 text-sm font-medium">
                    Mother Tongue<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="motherTongue"
                    placeholder="Enter your full name"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter student email"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="rollNumber" className="block mb-1 text-sm font-medium">
                    Roll Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="rollNumber"
                    placeholder="Enter roll number"
                    className="sms-input"
                  />
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Admission Details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="class" className="block mb-1 text-sm font-medium">
                    Class<span className="text-red-500">*</span>
                  </label>
                  <select id="class" className="sms-select">
                    <option value="">Select class</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="section" className="block mb-1 text-sm font-medium">
                    Section<span className="text-red-500">*</span>
                  </label>
                  <select id="section" className="sms-select">
                    <option value="">Select section</option>
                    <option value="a">Section A</option>
                    <option value="b">Section B</option>
                    <option value="c">Section C</option>
                    <option value="d">Section D</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="admissionNumber" className="block mb-1 text-sm font-medium">
                    Admission Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="admissionNumber"
                    placeholder="Enter Admission Number"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="admissionDate" className="block mb-1 text-sm font-medium">
                    Admission Date<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="admissionDate"
                      placeholder="Select date"
                      className="sms-input pr-10"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Calendar size={18} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="academicYear" className="block mb-1 text-sm font-medium">
                    Academic Year<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="academicYear"
                      placeholder="Select Academic Year"
                      className="sms-input pr-10"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Calendar size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Father's Details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="fatherName" className="block mb-1 text-sm font-medium">
                    Father's Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    placeholder="Enter full name"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="fatherOccupation" className="block mb-1 text-sm font-medium">
                    Father's Occupation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherOccupation"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="fatherContact" className="block mb-1 text-sm font-medium">
                    Father's Contact Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherContact"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label htmlFor="fatherEmail" className="block mb-1 text-sm font-medium">
                    Father's Email
                  </label>
                  <input
                    type="email"
                    id="fatherEmail"
                    placeholder="Enter Parents Email"
                    className="sms-input max-w-md"
                  />
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Mother's Details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="motherName" className="block mb-1 text-sm font-medium">
                    Mother's Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    placeholder="Enter full name"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="motherOccupation" className="block mb-1 text-sm font-medium">
                    Mother's Occupation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="motherOccupation"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="motherContact" className="block mb-1 text-sm font-medium">
                    Mother's Contact Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="motherContact"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label htmlFor="motherEmail" className="block mb-1 text-sm font-medium">
                    Mother's Email
                  </label>
                  <input
                    type="email"
                    id="motherEmail"
                    placeholder="Enter Parents Email"
                    className="sms-input max-w-md"
                  />
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Guardian Information If Applicable">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="guardianFatherName" className="block mb-1 text-sm font-medium">
                    Father's Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianFatherName"
                    placeholder="Enter full name"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="guardianFatherOccupation" className="block mb-1 text-sm font-medium">
                    Father's Occupation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianFatherOccupation"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="guardianFatherContact" className="block mb-1 text-sm font-medium">
                    Father's Contact Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianFatherContact"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="guardianMotherName" className="block mb-1 text-sm font-medium">
                    Mother's Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianMotherName"
                    placeholder="Enter full name"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="guardianMotherOccupation" className="block mb-1 text-sm font-medium">
                    Mother's Occupation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianMotherOccupation"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="guardianMotherContact" className="block mb-1 text-sm font-medium">
                    Mother's Contact Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianMotherContact"
                    placeholder="Enter Occupation"
                    className="sms-input"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <label htmlFor="parentsEmail" className="block mb-1 text-sm font-medium">
                    Parents Email
                  </label>
                  <input
                    type="email"
                    id="parentsEmail"
                    placeholder="Enter Parents Email"
                    className="sms-input max-w-md"
                  />
                </div>
              </div>
            </FormSection>
            
            <FormSection title="Upload Documents">
              <div className="mb-6">
                <label className="block mb-3 text-base font-medium">Upload All the Documents</label>
                <div className="sms-upload-area">
                  <div className="mb-3 text-gray-400">
                    <Upload size={40} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-center text-gray-500 max-w-md mx-auto">
                    Browse and choose the files you want to upload from your computer
                  </p>
                  <label className="mt-6">
                    <span className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-sms-blue rounded-md cursor-pointer hover:bg-blue-600 transition-colors">
                      <span className="mr-2">+</span> Upload
                    </span>
                    <input type="file" className="hidden" multiple />
                  </label>
                </div>
              </div>
            </FormSection>
            
            <div className="flex justify-end gap-3 my-8">
              <button
                type="button"
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium text-white bg-sms-blue rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAdmission;
