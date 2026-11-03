"use client";

import React from "react";
import { Menu, Plus, MapPin } from "lucide-react";
import { NotificationDropdown } from "@/components/layout/NotificationDropdown";

interface HeaderProps {
  onOpenSidebar: () => void;
  onOpenNewLead?: () => void;
  selectedLocation: string;
  onLocationChange: (loc: string) => void;
  locations?: Array<{ id: string; name: string }>;
}

export function Header({
  onOpenSidebar,
  onOpenNewLead,
  selectedLocation,
  onLocationChange,
  locations = [],
}: HeaderProps) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <header
      className="h-16 bg-white/90 backdrop-blur-md border-b border-[#e5e3df] px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30"
      data-ui="ui-frame"
    >
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="p-2 rounded-lg text-charcoal-700 hover:text-charcoal-950 hover:bg-black/[0.05] lg:hidden focus:outline-hidden focus:ring-2 focus:ring-ember"
          aria-label="Open navigation sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Location Selector */}
        <div className="flex items-center gap-2 bg-paper border border-[#e0dedb] rounded-lg px-2.5 py-1.5 shadow-[0_1px_2px_rgba(17,17,17,0.03)]">
          <MapPin className="w-3.5 h-3.5 text-ember shrink-0" aria-hidden="true" />
          <label htmlFor="location-select" className="sr-only">
            Select Location Scope
          </label>
          <select
            id="location-select"
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="bg-transparent font-semibold text-xs text-charcoal-950 focus:outline-hidden cursor-pointer"
          >
            <option value="All">All Locations (Network)</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date chip (desktop) */}
        <span
          suppressHydrationWarning
          className="hidden md:inline-flex items-center text-[11px] font-medium text-charcoal-700 tabular-nums border-l border-[#e5e3df] pl-3 ml-1"
        >
          {today} · IST
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        <NotificationDropdown />

        {onOpenNewLead && (
          <button
            type="button"
            onClick={onOpenNewLead}
            className="inline-flex items-center gap-1.5 bg-ember hover:bg-ember-deep text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-[0_2px_8px_rgba(232,93,58,0.3)] hover:shadow-[0_3px_12px_rgba(232,93,58,0.4)] transition-all focus:outline-hidden focus:ring-2 focus:ring-ember focus:ring-offset-2"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Lead</span>
            <span className="sm:hidden">Add</span>
          </button>
        )}
      </div>
    </header>
  );
}
