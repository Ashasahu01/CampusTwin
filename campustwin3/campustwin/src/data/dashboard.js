import { Users, Building2, Zap, Droplet } from "lucide-react";

export const METRICS = [
  {
    label: "Total Students",
    value: "2,000",
    change: "+12%",
    trend: "up",
    icon: Users,
    tone: "primary",
  },
  {
    label: "Campus Occupancy",
    value: "72%",
    change: "+6%",
    trend: "up",
    icon: Building2,
    tone: "warning",
  },
  {
    label: "Energy Usage",
    value: "63 kWh",
    change: "-8%",
    trend: "down",
    icon: Zap,
    tone: "success",
  },
  {
    label: "Water Usage",
    value: "54%",
    change: "-5%",
    trend: "down",
    icon: Droplet,
    tone: "cyan",
  },
];

export const LIVE_METRICS = [
  { label: "Classroom Utilization", value: 78, tone: "success" },
  { label: "Library Occupancy", value: 65, tone: "warning" },
  { label: "Cafeteria Demand", value: 71, tone: "warning" },
  { label: "Parking Usage", value: 82, tone: "cyan" },
  { label: "Network Load", value: 68, tone: "primary" },
];
