import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { AnalyticsDashboard } from "@/features/analytics/AnalyticsDashboard";


function AnalyticsPage() {
  return <AnalyticsDashboard />;
}

export const Route = createFileRoute("/app/analytics")({
  component: AnalyticsPage,
  head: () => ({
    meta: [
      { title: "WorkNest CRM — Analytics & Occupancy Cockpit" },
      { name: "description", content: "Occupancy, conversion velocity, utilization and revenue reporting across campuses." },
      { property: "og:title", content: "WorkNest CRM — Analytics & Occupancy Cockpit" },
      { property: "og:description", content: "Occupancy, conversion velocity, utilization and revenue reporting across campuses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
