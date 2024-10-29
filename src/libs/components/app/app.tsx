import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "~/pages/sign-up/sign-up";
import { WelcomePage } from "~/pages/welcome/welcome";
import { NotFound } from "~/pages/not-found/not-found";
import { createContext, useState } from "react";
import { type User, type Stage } from "~/libs/types/types";

type AppContext = {
  currentStage: number;
  stages: Stage[];
  user?: User;
  isStoreConnected: boolean;
  isCustomerSupportEmailConnected: boolean;
  setCurrentStage?: (payload: number) => void;
  setUser?: (payload: User) => void;
  changeIsStoreConnected?: (payload: boolean) => void;
  changeIsCustomerSupportEmailConnected?: (payload: boolean) => void;
  changeStage?: (stageNumber: number, callback: (stage: Stage) => Stage) => void;
}

export const Context = createContext<AppContext>({
  currentStage: 1,
  stages: [],
  isStoreConnected: false,
  isCustomerSupportEmailConnected: false,
});

const App: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [stages, setStages] = useState<Stage[]>([
    { number: 1, finished: false, active: true, label: 'Welcome' },
    { number: 2, finished: false, active: false, label: 'Connect your Shopify store' },
    { number: 3, finished: false, active: false, label: 'Connect your customer support email' },
    { number: 4, finished: false, active: false, label: 'Done' }
  ]);
  const [isStoreConnected, setIsStoreConnected ] = useState<boolean>(false);
  const [isCustomerSupportEmailConnected, setIsCustomerSupportEmailConnected] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const changeIsStoreConnected = (newValue: boolean): void => {
    setIsStoreConnected(newValue);
  }

  const changeIsCustomerSupportEmailConnected = (newValue: boolean): void => {
    setIsCustomerSupportEmailConnected(newValue);
  }

  const changeStage = (stageNumber: number, callBack: (stage: Stage) => Stage): void => {
    setStages((prevStages: Stage[]) => {
      return prevStages.map((stage) => 
        stage.number === stageNumber ? callBack(stage) : stage
      );
    });
  };

  return (
    <Context.Provider value={{
      currentStage,
      stages,
      user,
      isStoreConnected,
      isCustomerSupportEmailConnected,
      setCurrentStage,
      setUser,
      changeIsStoreConnected,
      changeIsCustomerSupportEmailConnected,
      changeStage,
    }}>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Context.Provider>
  )
};

export { App };