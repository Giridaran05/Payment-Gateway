
import React, { useEffect, useState } from 'react';
import { Screen } from '../types';
import { ArrowLeftIcon, CircleCheckIcon, CircleIcon } from './IconComponents';

interface VerificationScreenProps {
  setScreen: (screen: Screen) => void;
}

const ScreenHeader: React.FC<{ title: string; onBack: () => void, dark?: boolean }> = ({ title, onBack, dark=false }) => (
  <div className="flex items-center p-4 absolute top-0 left-0 w-full z-10 pt-10">
    <button onClick={onBack} className="p-2 -ml-2">
      <ArrowLeftIcon className={`h-6 w-6 ${dark ? 'text-white' : 'text-gray-700'}`} />
    </button>
    <h1 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-800'} ml-4`}>{title}</h1>
  </div>
);

export const ScanIdIntro: React.FC<VerificationScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="" onBack={() => setScreen(Screen.ConfirmPhone)} />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                <div className="w-48 h-48 flex items-center justify-center mb-12">
                    <svg className="w-full h-full text-gray-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M78.5714 26.4286H21.4286C18.1289 26.4286 15.4286 29.1289 15.4286 32.4286V67.5714C15.4286 70.8711 18.1289 73.5714 21.4286 73.5714H78.5714C81.8711 73.5714 84.5714 70.8711 84.5714 67.5714V32.4286C84.5714 29.1289 81.8711 26.4286 78.5714 26.4286Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M49.9999 50C55.5227 50 59.9999 45.5228 59.9999 40C59.9999 34.4772 55.5227 30 49.9999 30C44.4771 30 39.9999 34.4772 39.9999 40C39.9999 45.5228 44.4771 50 49.9999 50Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M35 70V60C35 56.6863 37.6863 54 41 54H59C62.3137 54 65 56.6863 65 60V70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Scan ID document to verify your identity</h1>
                <p className="text-gray-500 mb-12">Confirm your identity with just a few taps on your phone.</p>
                <button onClick={() => setScreen(Screen.IdVerificationInProgress)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                    Scan
                </button>
            </div>
        </div>
    );
};

export const IdVerificationInProgress: React.FC<VerificationScreenProps> = ({ setScreen }) => {
    useEffect(() => {
        const timer = setTimeout(() => setScreen(Screen.TakeSelfieIntro), 3000);
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-full flex flex-col bg-gray-900 text-white p-6 relative">
             <ScreenHeader title="1/2" onBack={() => setScreen(Screen.ScanIdIntro)} dark={true}/>
            <div className="flex-grow flex flex-col items-center justify-center text-center -mt-16">
                <p className="text-lg mb-6">Please scan front of your ID card</p>
                <div className="w-80 h-48 bg-gray-700 rounded-xl border-2 border-blue-500 p-4 relative flex items-center justify-center mb-12">
                   <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-lg flex flex-col justify-between p-2">
                     <p className="text-left text-xs">ID CARD</p>
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-16 bg-gray-500 rounded"></div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2 bg-gray-500 rounded"></div>
                           <div className="h-2 bg-gray-500 rounded w-3/4"></div>
                           <div className="h-2 bg-gray-500 rounded w-1/2"></div>
                        </div>
                     </div>
                   </div>
                </div>
                <h2 className="text-xl font-semibold">ID verification in progress</h2>
                <p className="text-gray-400 mb-6">Hold tight, it won't take long</p>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full animate-pulse" style={{width: "50%"}}></div>
                </div>
            </div>
        </div>
    );
};

export const TakeSelfieIntro: React.FC<VerificationScreenProps> = ({ setScreen }) => {
    return (
         <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="" onBack={() => setScreen(Screen.ScanIdIntro)} />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                 <div className="w-48 h-48 flex items-center justify-center text-gray-300 mb-12">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.6667 43.75C41.6667 38.9175 45.4175 35 50.25 35C55.0825 35 58.8333 38.9175 58.8333 43.75C58.8333 48.5825 55.0825 52.5 50.25 52.5C45.4175 52.5 41.6667 48.5825 41.6667 43.75ZM75.5 22.5H65.8333L61.6667 16.25H38.8333L34.6667 22.5H25C21.9175 22.5 19.5 24.9175 19.5 28.0001V72C19.5 75.0826 21.9175 77.5001 25 77.5001H75.5C78.5825 77.5001 81 75.0826 81 72V28.0001C81 24.9175 78.5825 22.5 75.5 22.5ZM50.25 67.5C39.6675 67.5 31.1667 59.0825 31.1667 48.4175C31.1667 37.8325 39.6675 29.25 50.25 29.25C60.8325 29.25 69.3333 37.8325 69.3333 48.4175C69.3333 59.0825 60.8325 67.5 50.25 67.5Z" fill="currentColor"/></svg>
                 </div>
                 <h1 className="text-2xl font-bold text-gray-800 mb-4">Take selfie to verify your identity</h1>
                 <p className="text-gray-500 mb-12 max-w-xs">Quick and easy identification verification using your phone's camera.</p>
                 <button onClick={() => setScreen(Screen.TakeSelfie)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                     Take a selfie
                 </button>
            </div>
        </div>
    );
};

export const TakeSelfie: React.FC<VerificationScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-gray-900 text-white p-6 relative">
            <ScreenHeader title="" onBack={() => setScreen(Screen.TakeSelfieIntro)} dark={true}/>
            <div className="flex-grow flex flex-col items-center justify-center -mt-16 relative">
                <div className="w-full aspect-[3/4] rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden relative">
                    <img src="https://picsum.photos/seed/selfie/400/600" alt="Selfie placeholder" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-80 border-4 border-white rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-4">
                <p className="mb-8">Take your photo at arms length. Make sure your whole face is visible.</p>
                <div className="flex justify-center items-center">
                    <button onClick={() => setScreen(Screen.SettingUpAccount)} className="w-20 h-20 bg-white rounded-full p-1.5">
                        <div className="w-full h-full bg-white border-2 border-gray-900 rounded-full"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export const SettingUpAccount: React.FC<VerificationScreenProps> = ({ setScreen }) => {
    useEffect(() => {
        const timer = setTimeout(() => setScreen(Screen.CreatePasscode), 3000);
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const steps = [
        { name: 'Phone verified', completed: true },
        { name: 'Checking up document ID', completed: true },
        { name: 'Verifying photo', completed: false },
    ];

    return (
        <div className="h-full flex flex-col bg-white p-6">
             <ScreenHeader title="" onBack={() => setScreen(Screen.TakeSelfie)} />
             <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                 <div className="w-48 h-48 flex items-center justify-center text-gray-300 mb-12">
                     <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 58.3333C59.205 58.3333 66.6667 50.8717 66.6667 41.6667C66.6667 32.4616 59.205 25 50 25C40.795 25 33.3333 32.4616 33.3333 41.6667C33.3333 50.8717 40.795 58.3333 50 58.3333ZM50 58.3333V75M25 91.6667V83.3333C25 74.1283 32.4616 66.6667 41.6667 66.6667H58.3333C67.5384 66.6667 75 74.1283 75 83.3333V91.6667" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
                 <h1 className="text-2xl font-bold text-gray-800 mb-4">Setting up your account</h1>
                 <p className="text-gray-500 mb-12">We are analyzing your data to verify</p>
                 <div className="space-y-4 w-full max-w-xs">
                     {steps.map((step, index) => (
                         <div key={index} className="flex items-center text-left">
                            <div className="flex flex-col items-center mr-4">
                               {step.completed ? <CircleCheckIcon className="h-6 w-6 text-blue-600"/> : <CircleIcon className="h-6 w-6 text-gray-300"/>}
                               {index < steps.length - 1 && <div className="w-0.5 h-6 bg-gray-300 mt-1"></div>}
                            </div>
                            <span className={`font-medium ${step.completed ? 'text-gray-800' : 'text-gray-500'}`}>{step.name}</span>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    );
};
