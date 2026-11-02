import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { useWorkNest } from "@/context/WorkNestContext";
import { InvoicesDirectory } from "@/features/billing/InvoicesDirectory";

function BillingPage() {
  const { selectedLocation } = useWorkNest();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a1a1a]">
          Invoices & Billing
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          GST-compliant billing, member subscriptions, room overage invoicing, and payment reconciliations across{" "}
          <span className="font-semibold text-neutral-700">
            {selectedLocation === "All" ? "all coworking hubs" : selectedLocation}
          </span>
          .
        </p>
      </div>

      <InvoicesDirectory />
    </div>
  );
}

export const Route = createFileRoute("/billing")({
  component: BillingPage,
  head: () => ({
    meta: [
      { title: "WorkNest CRM — Invoices & Billing" },
      { name: "description", content: "Invoicing, payments collection and outstanding balances." },
      { property: "og:title", content: "WorkNest CRM — Invoices & Billing" },
      { property: "og:description", content: "Invoicing, payments collection and outstanding balances." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
