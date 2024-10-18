import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Login } from "./public/Login/Login"
import { PrivateGuard } from "./guard/PrivateGuard"
import { PrivateRouter } from "./private/PrivateRouter"
import { RoutesWithNotFound } from './components/RoutesWithNotFound/RoutesWithNotFound'
import { AppRoutes } from './models'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={AppRoutes.private.root} />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route element={<PrivateGuard />}>
          <Route path={`${AppRoutes.private.root}/*`} element={<PrivateRouter />} />
        </Route>
      </RoutesWithNotFound >
    </BrowserRouter>
  )
}
