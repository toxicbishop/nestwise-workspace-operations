import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createRouter, createMemoryHistory, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";

describe("debug", () => {
  it("renders via router", () => {
    const rootRoute = createRootRoute({ component: () => <Outlet /> });
    const indexRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/",
      component: () => <button aria-label="notifications">bell</button>,
    });
    const router = createRouter({
      routeTree: rootRoute.addChildren([indexRoute]),
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("button", { name: /notifications/i })).toBeInTheDocument();
  });
});
