import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { RouterProvider, createRouter, createMemoryHistory, createRootRoute, createRoute, Outlet, createBrowserHistory } from "@tanstack/react-router";

describe("debug", () => {
  it("renders via router", async () => {
    const rootRoute = createRootRoute({ component: () => <Outlet /> });
    const indexRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/",
      component: () => <button aria-label="notifications">bell</button>,
    });
    const router = createRouter({
      routeTree: rootRoute.addChildren([indexRoute]),
      history: createBrowserHistory(),
    });
    const { container } = render(<RouterProvider router={router} />);
    console.log("HTML1:", container.innerHTML.slice(0, 200));
    await act(async () => {
      await router.load();
    });
    console.log("HTML2:", container.innerHTML.slice(0, 200));
    expect(screen.getByRole("button", { name: /notifications/i })).toBeInTheDocument();
  });
});
