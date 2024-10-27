import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "~/pages/sign-up/sign-up";
import { WelcomePage } from "~/pages/welcome/welcome";
import { NotFound } from "~/pages/not-found/not-found";
import { createContext, useState } from "react";
import { type Stage } from "~/libs/types/types";

type AppContext = {
  stages: Stage[];
  user?: {
    email: string;
    name: string;
    password: string;
  };
  isStoreConnected: boolean;
  isCustomerSupportEmailConnected: boolean;
  changeIsStoreConnected?: (payload: boolean) => void;
  changeIsCustomerSupportEmailConnected?: (payload: boolean) => void;
  changeStage?: (stageNumber: number, callback: (stage: Stage) => Stage) => void;
}

export const Context = createContext<AppContext>({
  stages: [],
  isStoreConnected: false,
  isCustomerSupportEmailConnected: false,
});

const App: React.FC = () => {
  const [stages, _setStages] = useState<Stage[]>([
    { number: 1, finished: true, active: false, label: 'Welcome' },
    { number: 2, finished: true, active: false, label: 'Connect your Shopify store' },
    { number: 3, finished: true, active: false, label: 'Connect your customer support email' },
    { number: 4, finished: false, active: true, label: 'Done' }
  ]);
  const [isStoreConnected, setIsStoreConnected ] = useState<boolean>(false);
  const [isCustomerSupportEmailConnected, setIsCustomerSupportEmailConnected] = useState<boolean>(false);

  const changeIsStoreConnected = (newValue: boolean): void => {
    setIsStoreConnected(newValue);
  }

  const changeIsCustomerSupportEmailConnected = (newValue: boolean): void => {
    setIsCustomerSupportEmailConnected(newValue);
  }

  // const changeStage = (stageNumber: number, callBack: (stage: Stage) => Stage): void => {
  //   setStages((prev: Stage[]) => {
  //     const stageToChange = prev.find((stage: Stage) => stage.number === stageNumber);

  //     return prev;
  //   })
  // }

  return (
    <Context.Provider value={{
      stages,
      isStoreConnected,
      isCustomerSupportEmailConnected,
      changeIsStoreConnected,
      changeIsCustomerSupportEmailConnected,
    }}>
      <Router>
        <Routes>
          <Route path="/sign-up/:stage" element={<SignUp />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Context.Provider>
  )
};

export { App };