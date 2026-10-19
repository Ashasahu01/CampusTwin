import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Campus from "./pages/Campus";
import Buildings from "./pages/Buildings";
import BuildingDetails from "./pages/BuildingDetails";
import Rooms from "./pages/Rooms";
import Analytics from "./pages/Analytics";
import Simulation from "./pages/Simulation";
import AIAssistant from "./pages/AIAssistant";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

const PAGE_META = {
  dashboard: { title: "Campus Dashboard", subtitle: "Real-time insights into your smart campus" },
  campus: { title: "3D Campus View", subtitle: "Interactive digital twin of the campus" },
  buildings: { title: "Buildings", subtitle: "Status and utilization across all buildings" },
  buildingDetails: { title: "Building Details", subtitle: "Live status and historical data" },
  rooms: { title: "Rooms", subtitle: "Search and manage room availability" },
  analytics: { title: "Analytics", subtitle: "Campus-wide trends and insights" },
  simulation: { title: "What-If Simulator", subtitle: "Test scenarios and plan for the future" },
  aiAssistant: { title: "AI Campus Assistant", subtitle: "Ask anything about your smart campus" },
  alerts: { title: "Alerts", subtitle: "Monitor and resolve campus anomalies" },
  reports: { title: "Reports", subtitle: "Generate and download campus reports" },
  profile: { title: "Profile", subtitle: "Manage your account" },
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.dashboard} />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.campus} />
          </ProtectedRoute>
        }
      >
        <Route path="/campus" element={<Campus />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.buildings} />
          </ProtectedRoute>
        }
      >
        <Route path="/buildings" element={<Buildings />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.buildingDetails} />
          </ProtectedRoute>
        }
      >
        <Route path="/buildings/:id" element={<BuildingDetails />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.rooms} />
          </ProtectedRoute>
        }
      >
        <Route path="/rooms" element={<Rooms />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.analytics} />
          </ProtectedRoute>
        }
      >
        <Route path="/analytics" element={<Analytics />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.simulation} />
          </ProtectedRoute>
        }
      >
        <Route path="/simulation" element={<Simulation />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.aiAssistant} />
          </ProtectedRoute>
        }
      >
        <Route path="/ai-assistant" element={<AIAssistant />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.alerts} />
          </ProtectedRoute>
        }
      >
        <Route path="/alerts" element={<Alerts />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.reports} />
          </ProtectedRoute>
        }
      >
        <Route path="/reports" element={<Reports />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout {...PAGE_META.profile} />
          </ProtectedRoute>
        }
      >
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
