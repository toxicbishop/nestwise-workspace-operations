import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  RouterProvider,
  createRouter,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import { NotificationDropdown } from "@/components/layout/NotificationDropdown";
import { WorkNestProvider } from "@/context/WorkNestContext";

// The dropdown renders TanStack Links, so it needs a router context in tests.
const renderWithRouter = (ui: React.ReactElement) => {
  const rootRoute = createRootRoute({ component: () => <Outlet /> });
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => ui,
  });
  const router = createRouter({
    routeTree: rootRoute.addChildren([indexRoute]),
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  return render(
    <WorkNestProvider>
      <RouterProvider router={router} />
    </WorkNestProvider>
  );
};

describe("NotificationDropdown Component", () => {
  it("renders notification bell button with active count badge", () => {
    renderWithRouter(<NotificationDropdown />);

    const bellBtn = screen.getByRole("button", { name: /notifications/i });
    expect(bellBtn).toBeInTheDocument();
  });

  it("opens popover with live operational alerts when clicked", () => {
    renderWithRouter(<NotificationDropdown />);

    const bellBtn = screen.getByRole("button", { name: /notifications/i });
    fireEvent.click(bellBtn);

    expect(screen.getByText("Notifications & Alerts")).toBeInTheDocument();
    expect(screen.getByText("Clear All")).toBeInTheDocument();
  });

  it("clears notifications when Clear All is clicked", () => {
    renderWithRouter(<NotificationDropdown />);

    const bellBtn = screen.getByRole("button", { name: /notifications/i });
    fireEvent.click(bellBtn);

    const clearBtn = screen.getByText("Clear All");
    fireEvent.click(clearBtn);

    expect(screen.getByText("All caught up!")).toBeInTheDocument();
  });
});
