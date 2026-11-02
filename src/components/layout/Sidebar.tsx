"use client";

import React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users2,
  CalendarCheck2,
  UserCheck,
  Building2,
  Receipt,
  Settings,
  X,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useWorkNest } from "@/context/WorkNestContext";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { selectedLocation, setSelectedLocation, locations, leads } = useWorkNest();

  const openInquiriesCount = leads.filter(
    (l) => l.status === "New" || l.status === "Contacted" || l.status === "Tour Booked"
  ).length;

  const NAV_OPERATIONS: NavItem[] = [
    {
      name: "Overview",
      href: "/app",
      icon: LayoutDashboard,
    },
    {
      name: "Leads and Tours",
      href: "/app/leads",
      icon: Users2,
      badge: openInquiriesCount,
    },
    {
      name: "Spaces and Inventory",
      href: "/app/spaces",
      icon: Building2,
    },
    {
      name: "Live Schedule",
      href: "/app/bookings",
      icon: CalendarCheck2,
      badge: "4 today",
    },
    {
      name: "Members Directory",
      href: "/app/members",
      icon: UserCheck,
    },
    {
      name: "Invoices and Billing",
      href: "/app/billing",
      icon: Receipt,
    },
  ];

  const NAV_SETTINGS: NavItem[] = [
    {
      name: "Campuses & Settings",
      href: "/app/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar container matching target design preview */}
      <aside
        data-ui="sidebar"
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-[248px] bg-[#f6f5f3] border-r border-[#dedcd8] text-[#141414] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto select-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Main Navigation"
      >
        {/* Brand header */}
        <div className="flex items-center justify-between p-5 pb-4 border-b border-[#dedcd8]" data-ui="ui-frame">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[30px] rounded-md bg-[#e85d3a] flex items-center justify-center text-white font-bold text-[15px] shrink-0">
              W
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[15px] tracking-tight text-[#1c1c1c]">
                WorkNest CRM
              </span>
              <span className="text-[12px] text-[#575757]">
                Operations Workspace
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-[#575757] hover:text-[#141414] hover:bg-[#f0efed] lg:hidden"
            aria-label="Close navigation sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Location / Campus Switcher */}
        <div className="p-3 pb-2">
          <div className="bg-white border border-[#dedcd8] rounded-md p-2.5 flex items-center justify-between cursor-pointer hover:border-[#c6c4c0] transition-colors relative">
            <div className="flex-1 min-w-0 pr-2">
              <span className="text-[11px] font-semibold text-[#575757] block leading-none mb-1">
                Active Campus
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#141414] truncate">
                <span className="w-2 h-2 rounded-full bg-[#144D33] shrink-0" />
                <span className="truncate">
                  {selectedLocation === "All" ? "All Campus Network" : selectedLocation}
                </span>
              </div>
            </div>
            <select
              aria-label="Switch active campus"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            >
              <option value="All">All Campus Network</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#575757] shrink-0 pointer-events-none" />
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
          <div>
            <div className="px-3 pb-1.5 text-[11px] font-bold text-[#575757] tracking-wider">
              OPERATIONS
            </div>
            <nav className="space-y-1">
              {NAV_OPERATIONS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-xs font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-white text-[#1c1c1c] font-semibold border border-[#dedcd8]"
                        : "text-[#4a4a4a] hover:text-[#141414] hover:bg-[#f0efed]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon
                        className={cn(
                          "w-4 h-4 shrink-0",
                          isActive ? "text-[#1c1c1c]" : "text-[#575757]"
                        )}
                      />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span className="tabular-nums text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#f0efed] text-[#4a4a4a]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="px-3 pb-1.5 text-[11px] font-bold text-[#575757] tracking-wider">
              SETTINGS
            </div>
            <nav className="space-y-1">
              {NAV_SETTINGS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-xs font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-white text-[#1c1c1c] font-semibold border border-[#dedcd8]"
                        : "text-[#4a4a4a] hover:text-[#141414] hover:bg-[#f0efed]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon
                        className={cn(
                          "w-4 h-4 shrink-0",
                          isActive ? "text-[#1c1c1c]" : "text-[#575757]"
                        )}
                      />
                      <span className="truncate">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User profile / session footer */}
        <div className="p-3 border-t border-[#dedcd8]" data-ui="ui-frame">
          <div className="flex items-center gap-2.5 p-2 rounded-md hover:bg-[#f0efed] transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#dbd8d3] text-[#1c1c1c] font-bold text-xs flex items-center justify-center shrink-0">
              ER
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-[#141414] truncate">
                Elena Rostova
              </div>
              <div className="text-[11px] text-[#575757] truncate">
                General Manager
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
