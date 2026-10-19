# CampusTwin — AI-Powered Digital Twin & Simulation Platform

## Stage 1 (this build): Project shell, layout, landing page, dashboard shell

### Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

### Routes available now
- `/` — Landing page (hero, features)
- `/login` — Login page (mock auth, demo buttons go straight to dashboard)
- `/dashboard` — Campus Dashboard (metric cards, campus overview, live metrics)
- `/campus`, `/buildings`, `/buildings/:id`, `/rooms`, `/analytics`,
  `/simulation`, `/ai-assistant`, `/alerts`, `/reports`, `/profile` — placeholder
  pages wired into the sidebar, ready for their real content in later stages.

### What's next
1. 3D Campus (Three.js + React Three Fiber digital twin)
2. Analytics charts (Recharts)
3. What-If Simulator
4. AI Campus Assistant chat UI
5. Alerts, Reports, Rooms, Buildings detail pages
6. Responsiveness + animation polish pass
