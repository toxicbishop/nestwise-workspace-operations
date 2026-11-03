import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { useWorkNest } from "@/context/WorkNestContext";
import { BookingsDirectory } from "@/features/bookings/BookingsDirectory";

function BookingsPage() {
  const { selectedLocation } = useWorkNest();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal-950">
          Bookings & Tours
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          Schedule meeting rooms, manage prospect walkthroughs, prevent reservation overlaps, and track space check-ins across{" "}
          <span className="font-semibold text-neutral-700">
            {selectedLocation === "All" ? "all coworking hubs" : selectedLocation}
          </span>
          .
        </p>
      </div>

      <BookingsDirectory />
    </div>
  );
}

export const Route = createFileRoute("/app/bookings")({
  component: BookingsPage,
  head: () => ({
    meta: [
      { title: "WorkNest CRM — Live Schedule" },
      { name: "description", content: "Bookings, walkthroughs and scheduling operations." },
      { property: "og:title", content: "WorkNest CRM — Live Schedule" },
      { property: "og:description", content: "Bookings, walkthroughs and scheduling operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
