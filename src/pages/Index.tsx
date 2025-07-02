import { useState } from "react";
import { PremiumSidebar } from "@/components/premium/PremiumSidebar";
import { PremiumDashboard } from "@/components/premium/PremiumDashboard";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-main flex">
      <PremiumSidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <PremiumDashboard />
    </div>
  );
};

export default Index;
