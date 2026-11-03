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
  Building,
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

  const renderNavItem = (item: NavItem) => {
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
          "group relative flex items-center justify-between pl-4 pr-3 py-2 text-xs rounded-lg transition-all duration-150",
          isActive
            ? "bg-white text-charcoal-900 font-semibold shadow-[0_1px_3px_rgba(17,17,17,0.06)] ring-1 ring-black/[0.04]"
            : "text-charcoal-700 font-medium hover:text-charcoal-900 hover:bg-black/[0.035]"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {/* Ember active rail */}
        <span
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-ember transition-all duration-150",
            isActive ? "h-4 opacity-100" : "h-0 opacity-0"
          )}
          aria-hidden="true"
        />
        <div className="flex items-center gap-2.5 min-w-0">
          <Icon
            className={cn(
              "w-4 h-4 shrink-0 transition-colors",
              isActive ? "text-ember" : "text-charcoal-700/70 group-hover:text-charcoal-900"
            )}
          />
          <span className="truncate">{item.name}</span>
        </div>
        {item.badge !== undefined && (
          <span
            className={cn(
              "tabular-nums text-[10px] font-semibold px-1.5 py-0.5 rounded-md transition-colors",
              isActive
                ? "bg-ember-soft text-ember-deep"
                : "bg-black/[0.05] text-charcoal-700"
            )}
          >
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-charcoal-950/50 backdrop-blur-[2px] lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        data-ui="sidebar"
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-[252px] bg-paper border-r border-[#e5e3df] text-charcoal-950 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto select-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Main Navigation"
      >
        {/* Brand header */}
        <div className="flex items-center justify-between p-5 pb-4 border-b border-[#e5e3df]" data-ui="ui-frame">
          <Link to="/app" className="flex items-center gap-3 group" aria-label="WorkNest CRM home">
            <div className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-ember to-ember-deep flex items-center justify-center text-white font-bold text-[15px] shrink-0 shadow-[0_2px_8px_rgba(232,93,58,0.35)] group-hover:shadow-[0_3px_12px_rgba(232,93,58,0.45)] transition-shadow">
              W
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-[15px] tracking-tight text-charcoal-950">
                WorkNest CRM
              </span>
              <span className="text-[11px] text-charcoal-700 tracking-wide">
                Operations Workspace
              </span>
            </div>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-charcoal-700 hover:text-charcoal-950 hover:bg-black/[0.05] lg:hidden"
            aria-label="Close navigation sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Location / Campus Switcher */}
        <div className="px-4 pt-4 pb-1">
          <div className="text-[10px] font-bold text-charcoal-700/80 tracking-[0.12em] uppercase mb-1.5 px-1">
            Active Campus
          </div>
          <div className="relative bg-white border border-[#e0dedb] rounded-lg p-2.5 shadow-[0_1px_2px_rgba(17,17,17,0.04)] hover:border-[#c9c7c3] transition-colors">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-6 h-6 rounded-md bg-charcoal-900 flex items-center justify-center shrink-0">
                  <Building className="w-3 h-3 text-white" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-charcoal-950 truncate leading-tight">
                    {selectedLocation === "All" ? "All Campus Network" : selectedLocation}
                  </div>
                  <div className="text-[10px] text-charcoal-700 leading-tight mt-0.5">
                    {selectedLocation === "All" ? `${locations.length} cities · India` : "India"}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-charcoal-700 shrink-0 pointer-events-none" />
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
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-5">
          <div>
            <div className="px-3 pb-1.5 text-[10px] font-bold text-charcoal-700/80 tracking-[0.12em] uppercase">
              Operations
            </div>
            <nav className="space-y-0.5">{NAV_OPERATIONS.map(renderNavItem)}</nav>
          </div>

          <div>
            <div className="px-3 pb-1.5 text-[10px] font-bold text-charcoal-700/80 tracking-[0.12em] uppercase">
              Settings
            </div>
            <nav className="space-y-0.5">{NAV_SETTINGS.map(renderNavItem)}</nav>
          </div>
        </div>

        {/* User profile / session footer */}
        <div className="p-3 border-t border-[#e5e3df]" data-ui="ui-frame">
          <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-black/[0.035] transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-charcoal-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 ring-2 ring-white">
              AM
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-charcoal-950 truncate">
                Arjun Malhotra
              </div>
              <div className="text-[10px] text-charcoal-700 truncate">
                General Manager · Mumbai
              </div>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
          </div>
        </div>
      </aside>
    </>
  );
}
