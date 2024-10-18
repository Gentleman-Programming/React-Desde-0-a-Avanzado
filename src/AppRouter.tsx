import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Login } from "./public/Login/Login"
import { PrivateGuard } from "./guard/PrivateGuard"
import { PrivateRouter } from "./private/PrivateRouter"
import { RoutesWithNotFound } from './components/RoutesWithNotFound/RoutesWithNotFound'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateGuard />}>
          <Route path="/private/*" element={<PrivateRouter />} />
        </Route>
      </RoutesWithNotFound >
    </BrowserRouter>
  )
}
