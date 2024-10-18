import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard/Dashboard"
import { RoutesWithNotFound } from "@/components/RoutesWithNotFound/RoutesWithNotFound"
import { AppRoutes } from "@/models"

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={AppRoutes.private.dashboard} />} />
      <Route path={AppRoutes.private.dashboard} element={<Dashboard />} />
    </RoutesWithNotFound>
  )
}
