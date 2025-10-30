
import React from 'react';
import { Screen } from '../types';

interface HomeScreenProps {
  setScreen: (screen: Screen) => void;
}

const HomeHeader: React.FC = () => (
    <div className="flex justify-between items-center px-6 py-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <div className="flex items-center space-x-4">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
             <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
        </div>
    </div>
);

const ActionButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="flex flex-col items-center space-y-2 text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            {icon}
        </div>
        <span className="text-xs font-medium text-gray-700">{label}</span>
    </div>
);

export const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen }) => {
  return (
    <div className="h-full flex flex-col bg-gray-50">
        <HomeHeader />
        
        <div className="px-6 mt-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-sm opacity-80">Total Balance</p>
                <p className="text-4xl font-bold mt-1">₹1,894</p>
                 <div className="flex justify-between items-center mt-6">
                    <button onClick={() => setScreen(Screen.ConfirmPhone)}  className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-lg text-sm">Transfer</button>
                    <button onClick={() => setScreen(Screen.ConfirmPhone)}  className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-lg text-sm">Request</button>
                </div>
            </div>
        </div>

        <div className="px-6 mt-8">
            <div className="grid grid-cols-4 gap-4">
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>} label="Scan any QR code"/>
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} label="Pay to anyone"/>
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>} label="Bank Transfer"/>
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} label="Check Balance"/>
            </div>
        </div>

        <div className="px-6 mt-8">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg text-gray-800">Recharge & Bills</h2>
              <button onClick={() => setScreen(Screen.ConfirmPhone)}  href="#" className="text-blue-600 font-semibold text-sm">View All</button>
            </div>
             <div className="grid grid-cols-4 gap-4 mt-4">
               <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h8a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} label="Mobile"/>
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} label="Electricity"/>
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="" /></svg>} label="Loan Payment"/>
                <ActionButton icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="" /></svg>} label="Funds Investment"/>
            </div>
        </div>

        <div className="px-20">
            <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-sm opacity-80">Rewards</p>
                 <p className="text-2xl font-bold mt-10">Offers&Cashbacks</p>
                <div className="flex items-left mt-3">
                </div>
            </div>
        </div>
        
        <div className="mt-auto bg-white shadow-inner pt-2 pb-4 px-6 rounded-t-2xl">
            <div className="flex justify-around items-center text-gray-500">
                <div className="flex flex-col items-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                   <button onClick={() => setScreen(Screen.ConfirmPhone)} className="text-xs font-bold">Home </button>
                </div>
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="text-xs">Money</span>
                </div>
                <div className="flex flex-col items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span className="text-xs">You</span>
                </div>
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293a1 1 0 010 1.414L4.414 9H6a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.586l-3.293-3.293a1 1 0 010-1.414z" /></svg>
                    <span className="text-xs">Explore</span>
                </div>
            </div>
        </div>
    </div>
  );
};
