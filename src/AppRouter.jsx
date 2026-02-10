import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ContactUs from "./pages/ContactUs"
import SignIn from "./pages/SignIn"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./layouts/AppLayout"
import AdminDashboard from "./pages/admin/AdminDashboard"
import TeacherDashboard from "./pages/teacher/TeacherDashboard"
import StudentDashboard from "./pages/student/StudentDashboard"

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        {/* <Route path="*" element={<PageNotFound />}></Route> */}
    </Routes>

    {/* Admin Routes */}

    <Routes>
      <Route path="/admin" element={<AppLayout />}>
        <Route index element={<AdminDashboard />}></Route>
      </Route>
    </Routes>

    {/* Teacher Routes */}

    <Routes>
      <Route path="/teacher" element={<AppLayout />}>
        <Route index element={<TeacherDashboard />}></Route>
      </Route>
    </Routes>

    {/* Student Routes */}

    <Routes>
      <Route path="/student" element={<AppLayout />}>
        <Route index element={<StudentDashboard />}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default AppRouter