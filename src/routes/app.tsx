import { Outlet } from "@tanstack/react-router";
import { WorkNestProvider } from "@/context/WorkNestContext";
import { AppShell } from "@/components/layout/AppShell";

// Layout for the CRM workspace: everything under /app gets the sidebar shell.
function CrmLayout() {
  return (
    <WorkNestProvider>
      <AppShell>
        <Outlet />
      </AppShell>
    </WorkNestProvider>
  );
}

export const Route = createFileRoute("/app")({
  component: CrmLayout,
});
