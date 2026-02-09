import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ContactUs from "./pages/ContactUs"
import SignIn from "./pages/SignIn"
import PageNotFound from "./pages/PageNotFound"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default AppRouter