
import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeftIcon, EyeIcon, LockClosedIcon, MailIcon, PhoneIcon, UserIcon } from './IconComponents';

interface AuthScreenProps {
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

export const SignInScreen: React.FC<AuthScreenProps> = ({ setScreen }) => {
  return (
    <div className="h-full flex flex-col bg-white p-8">
      <div className="flex items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
      </div>
      <div className="space-y-6">
        <div className="relative">
          <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input type="email" placeholder="Email Address" defaultValue="tanyamyroniuk@gmail.com" className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 border border-transparent focus:border-blue-500 focus:ring-0" />
        </div>
        <div className="relative">
          <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input type="password" placeholder="Password" defaultValue="password" className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-12 border border-transparent focus:border-blue-500 focus:ring-0" />
          <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" />
        </div>
      </div>
      <button onClick={() => setScreen(Screen.Home)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl mt-12 hover:bg-blue-700 transition-colors">
        Sign In
      </button>
      <p className="text-center text-gray-500 mt-6">
        I'm a new user. <button onClick={() => setScreen(Screen.SignUp)} className="font-semibold text-blue-600">Sign Up</button>
      </p>
       <p className="text-center text-gray-500 mt-auto">
        Go to <button onClick={() => setScreen(Screen.AdminLogin)} className="font-semibold text-blue-600">Admin Panel</button>
      </p>
    </div>
  );
};

export const SignUpScreen: React.FC<AuthScreenProps> = ({ setScreen }) => {
  return (
    <div className="h-full flex flex-col bg-white p-6">
      <ScreenHeader title="Sign Up" onBack={() => setScreen(Screen.SignIn)} />
      <div className="flex-grow px-4 mt-8">
        <div className="space-y-6">
            <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="text" placeholder="Full Name" defaultValue="Tanya Myroniuk" className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 border border-transparent focus:border-blue-500 focus:ring-0"/>
            </div>
            <div className="relative">
                <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="tel" placeholder="Phone Number" defaultValue="+8801712663389" className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 border border-transparent focus:border-blue-500 focus:ring-0"/>
            </div>
            <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="email" placeholder="Email Address" defaultValue="tanyamyroniuk@gmail.com" className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-4 border border-transparent focus:border-blue-500 focus:ring-0"/>
            </div>
            <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="password" placeholder="Password" defaultValue="password" className="w-full bg-gray-100 rounded-lg py-4 pl-12 pr-12 border border-transparent focus:border-blue-500 focus:ring-0"/>
                <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
        </div>
        <button onClick={() => setScreen(Screen.ConfirmPhone)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl mt-12 hover:bg-blue-700 transition-colors">
            Sign Up
        </button>
        <p className="text-center text-gray-500 mt-6">
            Already have an account. <button onClick={() => setScreen(Screen.SignIn)} className="font-semibold text-blue-600">Sign In</button>
        </p>
      </div>
    </div>
  );
};

export const ConfirmPhoneScreen: React.FC<AuthScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="Confirm your phone" onBack={() => setScreen(Screen.SignUp)} />
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
                <p className="text-gray-500 mb-8">We send 6 digits code to +881 1720 84 57 57</p>
                <div className="flex space-x-3 mb-8">
                    {['4', '2', '9', '6', '7', '1'].map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            defaultValue={digit}
                            className="w-12 h-14 bg-white border-2 border-gray-200 rounded-lg text-center text-2xl font-semibold focus:border-blue-500 focus:ring-0"
                        />
                    ))}
                </div>
                <p className="text-gray-500 mb-12">
                    Didn't get a code? <button className="font-semibold text-blue-600">Resend</button>
                </p>
                <button onClick={() => setScreen(Screen.ScanIdIntro)} className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                    Verify Your Number
                </button>
            </div>
        </div>
    );
};

export const AdminLoginScreen: React.FC<AuthScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full flex flex-col bg-white p-6">
            <ScreenHeader title="Admin Panel" onBack={() => setScreen(Screen.SignIn)} />
            <div className="flex-grow flex flex-col items-center justify-center -mt-16">
                 <div className="w-full max-w-sm bg-gray-100 p-8 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Here</h2>
                     <div className="space-y-6">
                         <input type="email" placeholder="Enter Email Address" className="w-full bg-white rounded-lg py-3 px-4 border border-gray-300 focus:border-blue-500 focus:ring-0" />
                         <input type="password" placeholder="Enter Password" className="w-full bg-white rounded-lg py-3 px-4 border border-gray-300 focus:border-blue-500 focus:ring-0" />
                     </div>
                     <button onClick={() => alert("Admin Logged In!")} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-8 hover:bg-blue-700 transition-colors">
                         Login
                     </button>
                 </div>
            </div>
        </div>
    );
};
