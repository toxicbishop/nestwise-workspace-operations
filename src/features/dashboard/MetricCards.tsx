"use client";

import React from "react";
import { DashboardMetrics } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface MetricCardsProps {
  metrics: DashboardMetrics;
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <section
      data-ui="kpi-strip"
      className="bg-white border border-[#dedcd8] rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#dedcd8] overflow-hidden"
    >
      {/* 1. Active Members */}
      <div className="p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-[#575757]">
          <span className="font-medium">Active Members</span>
          <span className="tabular-nums text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#E4F4EC] text-[#144D33]">
            +8 this mo
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold tracking-tight text-[#141414] tabular-nums">
          {metrics.activeMembers.toLocaleString()}
        </div>
        <div className="mt-2 text-[11px] text-[#575757]">
          Across 160 hot desks and 24 suites
        </div>
      </div>

      {/* 2. Occupancy Rate */}
      <div className="p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-[#575757]">
          <span className="font-medium">Occupancy Rate</span>
          <span className="tabular-nums text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#E4F4EC] text-[#144D33]">
            88.4%
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold tracking-tight text-[#141414] tabular-nums">
          142{" "}
          <span className="text-base font-normal text-[#575757]">
            / 160
          </span>
        </div>
        <div className="mt-2 text-[11px] text-[#575757]">
          18 flex desks currently open
        </div>
      </div>

      {/* 3. Tours Today */}
      <div className="p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-[#575757]">
          <span className="font-medium">Tours Today</span>
          <span className="tabular-nums text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#f0efed] text-[#4a4a4a]">
            {metrics.toursScheduledThisWeek} pending
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold tracking-tight text-[#141414] tabular-nums">
          {Math.max(4, metrics.toursScheduledThisWeek)}
        </div>
        <div className="mt-2 text-[11px] text-[#575757]">
          1 walkthrough completed at 09:30
        </div>
      </div>

      {/* 4. Recognized MRR */}
      <div className="p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-[#575757]">
          <span className="font-medium">Recognized MRR</span>
          <span className="tabular-nums text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#E4F4EC] text-[#144D33]">
            98.2% coll.
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold tracking-tight text-[#141414] tabular-nums">
          {formatCurrency(metrics.mrrCents)}
        </div>
        <div className="mt-2 text-[11px] text-[#575757]">
          Contracted monthly recurring revenue
        </div>
      </div>
    </section>
  );
}
