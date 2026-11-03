"use client";

import React from "react";
import { Users, Percent, CalendarCheck2, TrendingUp, ArrowUpRight } from "lucide-react";
import { DashboardMetrics } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface MetricCardsProps {
  metrics: DashboardMetrics;
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <section
      data-ui="kpi-strip"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {/* 1. Active Members */}
      <div className="group bg-white border border-[#e5e3df] rounded-xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(17,17,17,0.04)] hover:shadow-[0_4px_16px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-charcoal-900 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs font-semibold text-charcoal-700">Active Members</span>
          </div>
          <span className="inline-flex items-center gap-0.5 whitespace-nowrap tabular-nums text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60">
            <ArrowUpRight className="w-2.5 h-2.5" />
            +8 this mo
          </span>
        </div>
        <div className="mt-4 text-[28px] leading-none font-display font-bold tracking-tight text-charcoal-950 tabular-nums">
          {metrics.activeMembers.toLocaleString("en-IN")}
        </div>
        <div className="mt-2 text-[11px] text-charcoal-700">
          Across 160 hot desks and 24 suites
        </div>
      </div>

      {/* 2. Occupancy Rate */}
      <div className="group bg-white border border-[#e5e3df] rounded-xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(17,17,17,0.04)] hover:shadow-[0_4px_16px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-ember flex items-center justify-center shrink-0">
              <Percent className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs font-semibold text-charcoal-700">Occupancy Rate</span>
          </div>
          <span className="inline-flex items-center gap-0.5 whitespace-nowrap tabular-nums text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-ember-soft text-ember-deep ring-1 ring-ember/25">
            <TrendingUp className="w-2.5 h-2.5" />
            88.4%
          </span>
        </div>
        <div className="mt-4 text-[28px] leading-none font-display font-bold tracking-tight text-charcoal-950 tabular-nums">
          142{" "}
          <span className="text-base font-medium text-charcoal-700">/ 160</span>
        </div>
        {/* Occupancy bar */}
        <div className="mt-3 h-1.5 rounded-full bg-[#f0efec] overflow-hidden">
          <div className="h-full w-[88.4%] rounded-full bg-gradient-to-r from-ember to-ember-deep" />
        </div>
        <div className="mt-2 text-[11px] text-charcoal-700">18 flex desks currently open</div>
      </div>

      {/* 3. Tours Today */}
      <div className="group bg-white border border-[#e5e3df] rounded-xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(17,17,17,0.04)] hover:shadow-[0_4px_16px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#1B455C] flex items-center justify-center shrink-0">
              <CalendarCheck2 className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs font-semibold text-charcoal-700">Tours Today</span>
          </div>
          <span className="whitespace-nowrap tabular-nums text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#f0efec] text-charcoal-800 ring-1 ring-black/[0.06]">
            {metrics.toursScheduledThisWeek} pending
          </span>
        </div>
        <div className="mt-4 text-[28px] leading-none font-display font-bold tracking-tight text-charcoal-950 tabular-nums">
          {Math.max(4, metrics.toursScheduledThisWeek)}
        </div>
        <div className="mt-2 text-[11px] text-charcoal-700">
          1 walkthrough completed at 09:30
        </div>
      </div>

      {/* 4. Recognized MRR */}
      <div className="group bg-white border border-[#e5e3df] rounded-xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(17,17,17,0.04)] hover:shadow-[0_4px_16px_rgba(17,17,17,0.08)] hover:-translate-y-0.5 transition-all duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs font-semibold text-charcoal-700">Recognized MRR</span>
          </div>
          <span className="whitespace-nowrap tabular-nums text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60">
            98.2% coll.
          </span>
        </div>
        <div className="mt-4 text-[28px] leading-none font-display font-bold tracking-tight text-charcoal-950 tabular-nums">
          {formatCurrency(metrics.mrrCents)}
        </div>
        <div className="mt-2 text-[11px] text-charcoal-700">
          Contracted monthly recurring revenue
        </div>
      </div>
    </section>
  );
}
