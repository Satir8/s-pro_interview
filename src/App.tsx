import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage, EventsPage, NotificationsPage } from "./pages";
import { ROUTES } from "constants/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.EVENTS} element={<EventsPage />} />
      <Route path={ROUTES.NOTIFICATIONS} element={<NotificationsPage />} />
    </Routes>
  );
}

export default App;
