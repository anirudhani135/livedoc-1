import { TopBar } from "./TopBar";
import { StatsPanel } from "./StatsPanel";
import { ChatAssistant } from "./ChatAssistant";
import { ActivityTimeline } from "./ActivityTimeline";
import { TodoList } from "./TodoList";
import { PerformanceSummary } from "./PerformanceSummary";

export function PremiumDashboard() {
  return (
    <div className="flex-1 min-h-screen bg-gradient-main">
      <TopBar />
      
      <main className="p-6 space-y-6">
        {/* Greeting and Stats */}
        <StatsPanel />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <ChatAssistant />
            <TodoList />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-1">
            <ActivityTimeline />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <PerformanceSummary />
          </div>
        </div>
      </main>
    </div>
  );
}