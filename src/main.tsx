import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import LandingPage from "@/website/LandingPage.tsx";
import LoginPage from "@/auth/LoginPage.tsx";
import SignupPage from "@/auth/SignupPage.tsx";
import TasksPage from "@/user-portal/TasksPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/tasks" element={<TasksPage />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
