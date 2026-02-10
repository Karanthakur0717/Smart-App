import { Outlet } from "react-router"
import Container from "../components/layout/Container"

const AppLayout = () => {
  return (
    <>
        <div className="w-full bg-teal-700 text-white">
            Navigation
        </div>
        <Container>
            <Outlet />
        </Container>

    </>
  )
}

export default AppLayout