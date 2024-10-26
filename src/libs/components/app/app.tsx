import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "../../../pages/sign-up/sign-up";
import { WelcomePage } from "../../../pages/welcome/welcome";
import { NotFound } from "../../../pages/not-found/not-found";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up/:stage" element={<SignUp />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
};

export { App };