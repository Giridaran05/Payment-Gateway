
import React, { useState } from 'react';
import { Screen } from './types';
import { OnboardingScreen } from './components/Onboarding';
import { SignInScreen, SignUpScreen, ConfirmPhoneScreen, AdminLoginScreen } from './components/Auth';
import { ScanIdIntro, IdVerificationInProgress, TakeSelfieIntro, TakeSelfie, SettingUpAccount } from './components/Verification';
import { CreatePasscode, AddCardIntro, AddCardForm, VerifyCard, CardList } from './components/Setup';
import { HomeScreen } from './components/Home';
import { SplashScreen } from './components/SplashScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.Onboarding);

  const renderScreen = () => {
    switch (screen) {
      case Screen.SplashScreen:
        return <SplashScreen setScreen={setScreen} />;
      case Screen.Onboarding:
        return <OnboardingScreen setScreen={setScreen} />;
      case Screen.SignIn:
        return <SignInScreen setScreen={setScreen} />;
      case Screen.SignUp:
        return <SignUpScreen setScreen={setScreen} />;
      case Screen.ConfirmPhone:
        return <ConfirmPhoneScreen setScreen={setScreen} />;
      case Screen.ScanIdIntro:
        return <ScanIdIntro setScreen={setScreen} />;
      case Screen.IdVerificationInProgress:
        return <IdVerificationInProgress setScreen={setScreen} />;
      case Screen.TakeSelfieIntro:
        return <TakeSelfieIntro setScreen={setScreen} />;
      case Screen.TakeSelfie:
        return <TakeSelfie setScreen={setScreen} />;
      case Screen.SettingUpAccount:
        return <SettingUpAccount setScreen={setScreen} />;
      case Screen.CreatePasscode:
          return <CreatePasscode setScreen={setScreen} />;
      case Screen.AddCardIntro:
          return <AddCardIntro setScreen={setScreen} />;
      case Screen.AddCardForm:
          return <AddCardForm setScreen={setScreen} />;
      case Screen.VerifyCard:
          return <VerifyCard setScreen={setScreen} />;
      case Screen.CardList:
          return <CardList setScreen={setScreen} />;
      case Screen.Home:
          return <HomeScreen setScreen={setScreen} />;
      case Screen.AdminLogin:
          return <AdminLoginScreen setScreen={setScreen} />;
      default:
        return <OnboardingScreen setScreen={setScreen} />;
    }
  };

  return (
    <main className="bg-gray-200 min-h-screen flex items-center justify-center font-sans">
      <div className="w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-[12px] border-black box-content">
        <div className="absolute top-0 left-0 w-full h-8 bg-black z-10 rounded-t-[28px]">
          <div className="w-40 h-6 bg-black rounded-b-xl absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="pt-8 h-full">
          {renderScreen()}
        </div>
      </div>
    </main>
  );
};

export default App;
