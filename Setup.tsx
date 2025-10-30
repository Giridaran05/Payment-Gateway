
import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeftIcon, CheckCircleIcon } from './IconComponents';

interface SetupScreenProps {
  setScreen: (screen: Screen) => void;
}

const ScreenHeader: React.FC<{ title: string; onBack: () => void }> = ({ title, onBack }) => (
  <div className="flex items-center p-4">
    <button onClick={onBack} className="p-2 -ml-2">
      <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
    </button>
    <h1 className="text-xl font-bold text-gray-800 ml-4">{title}</h1>
  </div>
);

export const CreatePasscode: React.FC<SetupScreenProps> = ({ setScreen }) => {
    const [passcode, setPasscode] = useState<string[]>([]);

    const handleKeyPress = (key: string) => {
        if (key === 'del') {
            setPasscode(prev => prev.slice(0, -1));
        } else if (passcode.length < 4) {
            const newPasscode = [...passcode, key];
            setPasscode(newPasscode);
            if(newPasscode.length === 4) {
                setTimeout(() => setScreen(Screen.AddCardIntro), 500);
            }
        }
    };
    
    const numpadKeys = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['', '0', 'del']
    ];

    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="Create passcode" onBack={() => setScreen(Screen.SettingUpAccount)} />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                <p className="text-gray-500 mb-8">This info needs to be accurate with your ID document.</p>
                <div className="flex space-x-4 mb-12">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={`w-4 h-4 rounded-full ${index < passcode.length ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-8">
                {numpadKeys.flat().map((key, index) => (
                    <button key={index} onClick={() => handleKeyPress(key)} disabled={!key} className="h-20 rounded-xl text-2xl font-semibold text-gray-800 flex items-center justify-center active:bg-gray-100 disabled:opacity-0">
                        {key === 'del' ? '⌫' : key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const AddCardIntro: React.FC<SetupScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="" onBack={() => setScreen(Screen.CreatePasscode)} />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                <div className="w-48 h-48 flex items-center justify-center text-gray-300 mb-12">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.1667 33.3333H20.8333C18.4117 33.3333 16.6667 35.0783 16.6667 37.5V70.8333C16.6667 73.255 18.4117 75 20.8333 75H79.1667C81.5883 75 83.3333 73.255 83.3333 70.8333V37.5C83.3333 35.0783 81.5883 33.3333 79.1667 33.3333Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.6667 45.8333H83.3333" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Let's add your card</h1>
                <p className="text-gray-500 mb-12 max-w-xs">Experience the power of financial organization with our platform.</p>
                <button onClick={() => setScreen(Screen.AddCardForm)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                    + Add your card
                </button>
            </div>
        </div>
    );
};

export const AddCardForm: React.FC<SetupScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="Add card" onBack={() => setScreen(Screen.AddCardIntro)} />
            <div className="flex-grow px-4 mt-4 space-y-4">
                <p className="text-gray-500 text-sm">Enter your credit card info into the box below.</p>
                <div>
                    <label className="text-xs font-semibold text-gray-500">Account Holder Name</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-gray-100 rounded-lg py-3 mt-1 px-4 border border-transparent focus:border-blue-500 focus:ring-0" />
                </div>
                <div>
                    <label className="text-xs font-semibold text-gray-500">Email</label>
                    <input type="email" placeholder="yourname@example.com" className="w-full bg-gray-100 rounded-lg py-3 mt-1 px-4 border border-transparent focus:border-blue-500 focus:ring-0" />
                </div>
                <div>
                    <label className="text-xs font-semibold text-gray-500">Card Number</label>
                    <input type="text" placeholder="1234 5678 9101 2345" className="w-full bg-gray-100 rounded-lg py-3 mt-1 px-4 border border-transparent focus:border-blue-500 focus:ring-0" />
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500">MM/YY</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-gray-100 rounded-lg py-3 mt-1 px-4 border border-transparent focus:border-blue-500 focus:ring-0" />
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-semibold text-gray-500">CVV</label>
                        <input type="text" placeholder="CVV" className="w-full bg-gray-100 rounded-lg py-3 mt-1 px-4 border border-transparent focus:border-blue-500 focus:ring-0" />
                    </div>
                </div>
                 <button onClick={() => setScreen(Screen.VerifyCard)} className="w-full bg-gray-300 text-gray-700 font-semibold py-4 rounded-xl mt-8 hover:bg-gray-400 transition-colors">
                    Verify
                </button>
            </div>
        </div>
    );
};

export const VerifyCard: React.FC<SetupScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="Verify your card" onBack={() => setScreen(Screen.AddCardForm)} />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                <p className="text-gray-500 mb-8 max-w-xs">We send 6 digits code to yourname@example.com</p>
                <div className="flex space-x-3 mb-8">
                    {[...Array(6)].map((_, index) => (
                        <input key={index} type="text" maxLength={1} className="w-12 h-14 bg-white border-2 border-gray-200 rounded-lg text-center text-2xl font-semibold focus:border-blue-500 focus:ring-0" />
                    ))}
                </div>
                <p className="text-gray-500 mb-12">
                    Didn't get a code? <button className="font-semibold text-blue-600">Resend</button>
                </p>
                <button onClick={() => setScreen(Screen.CardList)} className="w-full bg-gray-300 text-gray-700 font-semibold py-4 rounded-xl hover:bg-gray-400 transition-colors">
                    Verify
                </button>
            </div>
        </div>
    );
};

export const CardList: React.FC<SetupScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
             <ScreenHeader title="" onBack={() => setScreen(Screen.VerifyCard)} />
             <div className="flex-grow px-4 mt-8">
                 <div className="flex items-center space-x-3 bg-green-100 text-green-800 p-3 rounded-lg mb-8">
                     <CheckCircleIcon className="h-6 w-6"/>
                     <p className="font-semibold">Your card successfully added</p>
                 </div>
                 <h1 className="text-2xl font-bold mb-2">Card list</h1>
                 <p className="text-gray-500 mb-6">Enter your credit card info into the box below.</p>
                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                     <div className="flex items-center space-x-4">
                        <div className="w-10 h-7 bg-orange-500 rounded-md"></div>
                        <div>
                            <p className="font-semibold">Account</p>
                            <p className="text-sm text-gray-500">************3994</p>
                        </div>
                     </div>
                     <CheckCircleIcon className="h-6 w-6 text-green-500"/>
                 </div>
                 <div className="mt-auto pb-4 space-y-4">
                     <button onClick={() => setScreen(Screen.AddCardForm)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                        + Add another card
                    </button>
                     <button onClick={() => setScreen(Screen.Home)} className="w-full bg-gray-200 text-gray-800 font-semibold py-4 rounded-xl hover:bg-gray-300 transition-colors">
                        Continue
                    </button>
                 </div>
             </div>
        </div>
    );
};
