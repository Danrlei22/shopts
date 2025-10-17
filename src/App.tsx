import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/help" element={<Help />} />
        <Route path="/termofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
