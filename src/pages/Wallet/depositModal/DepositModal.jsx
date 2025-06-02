/* eslint-disable react/prop-types */
// App.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import useProfile from '../../../services/gameApi';
// import './App.css';

const DepositModal = ({ setIsDepositModal, toggleEye, setToggleEye }) => {
  const [activeSection, setActiveSection] = useState('Deposit');
  const userId = localStorage.getItem('userId');
  const { myDetails, loading, error, fetchProfileDetails } = useProfile(userId);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className='flex justify-center w-[90%] xl:w-[70%] h-[80%] overflow-hidden rounded-[0.25rem]'>
        <Sidebar setIsDepositModal={setIsDepositModal} toggleEye={toggleEye} setToggleEye={setToggleEye} setActiveSection={setActiveSection} activeSection={activeSection} fetchProfileDetails={fetchProfileDetails} myDetails={myDetails} />
        <Content section={activeSection} setIsDepositModal={setIsDepositModal} />
      </div>
    </div>
  );
};

export default DepositModal;
