import MainPanel from "./MainPanel";
import Sidebar from "./Sidebar";
import StatsPanel from "./StatsPanel";

export default function AppShell() {
  return (
    <main className="min-h-screen bg-[#0F2A2F] text-white">
      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>

        <div className="flex-1">
          <MainPanel />
        </div>

        <div className="w-120">
          <StatsPanel />
        </div>
      </div>
    </main>
  );
}
