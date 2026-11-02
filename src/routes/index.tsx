import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Plus, Calendar } from "lucide-react";
import { useWorkNest, NewLeadData } from "@/context/WorkNestContext";
import { MetricCards } from "@/features/dashboard/MetricCards";
import { LeadsTable } from "@/features/leads/LeadsTable";
import { LeadModal } from "@/features/leads/LeadModal";
import { ConvertModal } from "@/features/leads/ConvertModal";
import { Lead } from "@/types";

function DashboardPage() {
  const {
    leads,
    metrics,
    selectedLocation,
    addLead,
    updateLead,
    deleteLead,
    updateLeadStatus,
    convertLead,
  } = useWorkNest();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [convertingLead, setConvertingLead] = useState<Lead | null>(null);

  const handleEditLead = (lead: Lead) => {
    setEditingLead(lead);
    setIsModalOpen(true);
  };

  const handleOpenNewLead = () => {
    setEditingLead(null);
    setIsModalOpen(true);
  };

  const handleSaveLead = (leadData: NewLeadData) => {
    if (leadData.id) {
      updateLead(leadData as Lead);
    } else {
      addLead(leadData);
    }
  };

  const handleConvertLead = (lead: Lead) => {
    setConvertingLead(lead);
  };

  const currentHubName =
    selectedLocation === "All" ? "Spitalfields Hub" : selectedLocation;

  return (
    <div className="space-y-6">
      {/* 1. Canvas Header matching design preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141414]">
            {currentHubName}: Today&apos;s Operations
          </h1>
          <p className="text-xs text-[#575757] mt-1">
            Real-time workspace capacity, tour walkthroughs, and active prospect conversion.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            to="/bookings"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141414] bg-white hover:bg-[#f0efed] border border-[#dedcd8] px-3.5 py-2 rounded-md transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#575757]" />
            <span>Schedule Tour</span>
          </Link>
          <button
            type="button"
            onClick={handleOpenNewLead}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1c1c1c] hover:bg-[#111111] px-3.5 py-2 rounded-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Booking</span>
          </button>
        </div>
      </div>

      {/* 2. Daily Pulse Finding Strip */}
      <div className="bg-white border border-[#dedcd8] border-l-4 border-l-[#1c1c1c] rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="text-[#141414]">
          <strong className="font-semibold text-[#1c1c1c]">Daily Pulse:</strong>{" "}
          3 prospect tours scheduled today; Studio 4B lease renewed by Arbor Design Ltd; 2 invoices due for collection.
        </div>
        <div className="text-[#575757] text-[11px] shrink-0 font-medium">
          <span className="tabular-nums">Updated 10:42 AM</span> · <span>Staff on duty: 4</span>
        </div>
      </div>

      {/* 3. Divided KPI Strip */}
      <MetricCards metrics={metrics} />

      {/* 4. Two-Column Workspace Grid (8fr : 4fr) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {/* Live Resource Availability and Bookings Timeline */}
          <section className="bg-white border border-[#dedcd8] rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#dedcd8]" data-ui="ui-frame">
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-[15px] text-[#1c1c1c]">
                  Live Resource Availability and Bookings
                </span>
                <span className="tabular-nums text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E4F4EC] text-[#144D33]">
                  Live Timeline
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-[#575757]">Wednesday, 21 Oct</span>
                <Link
                  to="/spaces"
                  className="px-2.5 py-1 text-xs font-medium text-[#141414] bg-white border border-[#dedcd8] rounded hover:bg-[#f0efed] transition-colors"
                >
                  Filter Spaces
                </Link>
              </div>
            </div>

            {/* Timeline Canvas */}
            <div className="mt-4 overflow-x-auto">
              <div className="min-w-[620px]">
                {/* Time Axis */}
                <div className="grid grid-cols-[140px_repeat(8,1fr)] pb-2.5 border-b border-[#dedcd8] text-xs text-[#575757] text-center" data-ui="ui-frame">
                  <span className="text-left font-bold text-[#4a4a4a]">RESOURCE</span>
                  <span>09:00</span>
                  <span>10:00</span>
                  <span>11:00</span>
                  <span>12:00</span>
                  <span>13:00</span>
                  <span>14:00</span>
                  <span>15:00</span>
                  <span>16:00</span>
                </div>

                {/* Resource Row 1 */}
                <div className="grid grid-cols-[140px_1fr] items-center py-2.5 border-b border-[#e8e7e5]" data-ui="ui-frame">
                  <div className="flex flex-col leading-tight pr-2">
                    <span className="text-xs font-semibold text-[#141414]">Boardroom Atlas</span>
                    <span className="text-[11px] text-[#575757]">12p · Video Conf</span>
                  </div>
                  <div className="relative h-8 bg-[#f0efed] rounded overflow-hidden grid grid-cols-8">
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="h-full" />

                    <div
                      style={{ left: "12.5%", width: "25%" }}
                      className="absolute top-[3px] bottom-[3px] rounded bg-[#1c1c1c] text-white text-[11px] font-semibold flex items-center px-2.5 truncate"
                      title="Finova Labs (Active Strategy)"
                    >
                      Finova Labs (Active Strategy)
                    </div>
                    <div
                      style={{ left: "62.5%", width: "25%" }}
                      className="absolute top-[3px] bottom-[3px] rounded bg-[#E8F0EB] text-[#173827] border border-[#C8D7CF] text-[11px] font-semibold flex items-center px-2.5 truncate"
                      title="Highline Media (Review)"
                    >
                      Highline Media (Review)
                    </div>
                  </div>
                </div>

                {/* Resource Row 2 */}
                <div className="grid grid-cols-[140px_1fr] items-center py-2.5 border-b border-[#e8e7e5]" data-ui="ui-frame">
                  <div className="flex flex-col leading-tight pr-2">
                    <span className="text-xs font-semibold text-[#141414]">Glasshouse 01</span>
                    <span className="text-[11px] text-[#575757]">4p · Brainstorm</span>
                  </div>
                  <div className="relative h-8 bg-[#f0efed] rounded overflow-hidden grid grid-cols-8">
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="h-full" />

                    <div
                      style={{ left: "37.5%", width: "12.5%" }}
                      className="absolute top-[3px] bottom-[3px] rounded bg-[#E6F0F6] text-[#1B455C] border border-[#B8D4E5] text-[11px] font-semibold flex items-center px-2 truncate"
                      title="Tour: Sorenson and Co (6 Desks)"
                    >
                      Tour: Sorenson
                    </div>
                  </div>
                </div>

                {/* Resource Row 3 */}
                <div className="grid grid-cols-[140px_1fr] items-center py-2.5 border-b border-[#e8e7e5]" data-ui="ui-frame">
                  <div className="flex flex-col leading-tight pr-2">
                    <span className="text-xs font-semibold text-[#141414]">Acoustic Studio</span>
                    <span className="text-[11px] text-[#575757]">Broadcast audio</span>
                  </div>
                  <div className="relative h-8 bg-[#f0efed] rounded overflow-hidden grid grid-cols-8">
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="border-r border-dashed border-[#dedcd8] h-full" />
                    <div className="h-full" />

                    <div
                      style={{ left: "50%", width: "25%" }}
                      className="absolute top-[3px] bottom-[3px] rounded bg-[#1c1c1c] text-white text-[11px] font-semibold flex items-center px-2.5 truncate"
                      title="Venturecast Ep. 42"
                    >
                      Venturecast Ep. 42
                    </div>
                  </div>
                </div>

                {/* Resource Row 4 */}
                <div className="grid grid-cols-[140px_1fr] items-center py-2.5 border-b border-[#e8e7e5]" data-ui="ui-frame">
                  <div className="flex flex-col leading-tight pr-2">
                    <span className="text-xs font-semibold text-[#141414]">Studio 4B</span>
                    <span className="text-[11px] text-[#575757]">8p Dedicated Suite</span>
                  </div>
                  <div className="relative h-8 bg-[#f0efed] rounded overflow-hidden">
                    <div
                      style={{ left: "0%", width: "100%" }}
                      className="absolute top-[3px] bottom-[3px] rounded bg-[#E5E9E5] text-[#2F3D35] text-[11px] font-semibold flex items-center px-2.5 truncate"
                      title="Arbor Design Ltd (Active Contract until Nov 2027)"
                    >
                      Arbor Design Ltd (Active Contract until Nov 2027)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#4a4a4a]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#1c1c1c]" />
                <span>Active Booking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#E6F0F6] border border-[#B8D4E5]" />
                <span>Tour Walkthrough</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#E8F0EB] border border-[#C8D7CF]" />
                <span>Partner Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-[#E5E9E5]" />
                <span>Dedicated Suite</span>
              </div>
            </div>
          </section>

          {/* Inquiry Pipeline and Tours Table */}
          <section className="bg-white border border-[#dedcd8] rounded-lg p-5 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#dedcd8]" data-ui="ui-frame">
              <div>
                <h2 className="text-[15px] font-bold text-[#1c1c1c]">
                  Inquiry Pipeline and Tours
                </h2>
                <p className="text-xs text-[#575757]">
                  Filterable list with instant stage qualification and conversion
                </p>
              </div>
              <Link
                to="/leads"
                className="text-xs font-semibold text-[#1c1c1c] hover:underline"
              >
                View Full Pipeline →
              </Link>
            </div>

            <LeadsTable
              leads={leads}
              onEditLead={handleEditLead}
              onDeleteLead={deleteLead}
              onStatusChange={updateLeadStatus}
              onConvertLead={handleConvertLead}
              onOpenNewLead={handleOpenNewLead}
              selectedLocationFilter={selectedLocation}
            />
          </section>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          {/* 1. Scheduled Walkthroughs */}
          <section className="bg-white border border-[#dedcd8] rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#dedcd8]" data-ui="ui-frame">
              <span className="font-bold text-[15px] text-[#1c1c1c]">
                Scheduled Walkthroughs
              </span>
              <span className="tabular-nums text-xs font-semibold text-[#575757]">
                3 remaining
              </span>
            </div>

            <div className="divide-y divide-[#e8e7e5]" data-ui="ui-list">
              <div className="py-3 flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1B455C] mt-1.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-[#141414] truncate">
                    Sorenson and Co (6 Desks)
                  </div>
                  <div className="text-[11px] text-[#575757] mt-0.5">
                    <span className="tabular-nums">12:00 - 12:45</span> · Host: Elena Rostova · Glasshouse 01
                  </div>
                </div>
              </div>

              <div className="py-3 flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1B455C] mt-1.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-[#141414] truncate">
                    Amira Patel (Acoustic Suite)
                  </div>
                  <div className="text-[11px] text-[#575757] mt-0.5">
                    <span className="tabular-nums">15:30 - 16:15</span> · Host: James Miller · Studio West
                  </div>
                </div>
              </div>

              <div className="py-3 flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1B455C] mt-1.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-[#141414] truncate">
                    Kite Mobility (Team 12)
                  </div>
                  <div className="text-[11px] text-[#575757] mt-0.5">
                    <span className="tabular-nums">16:45 - 17:30</span> · Host: Elena Rostova · Floor 3 Suite
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Billing and Renewals Due */}
          <section className="bg-white border border-[#dedcd8] rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#dedcd8]" data-ui="ui-frame">
              <span className="font-bold text-[15px] text-[#1c1c1c]">
                Billing and Renewals Due
              </span>
              <span className="tabular-nums text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FAECEC] text-[#7C1E1E]">
                2 Due
              </span>
            </div>

            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#dedcd8] text-[#575757]" data-ui="ui-frame">
                    <th className="py-2 font-semibold">MEMBER</th>
                    <th className="py-2 font-semibold">AMOUNT</th>
                    <th className="py-2 font-semibold text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e7e5]" data-ui="ui-list">
                  <tr>
                    <td className="py-2.5">
                      <div className="font-bold text-[#141414]">Helios Robotics</div>
                      <div className="text-[11px] text-[#575757]">Inv #WN-1048</div>
                    </td>
                    <td className="py-2.5 font-semibold text-[#141414] tabular-nums">$4,200</td>
                    <td className="py-2.5 text-right">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FAECEC] text-[#7C1E1E]">
                        Due Today
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5">
                      <div className="font-bold text-[#141414]">Koto Studio</div>
                      <div className="text-[11px] text-[#575757]">Inv #WN-1051</div>
                    </td>
                    <td className="py-2.5 font-semibold text-[#141414] tabular-nums">$1,850</td>
                    <td className="py-2.5 text-right">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FAF0DF] text-[#6E3F08]">
                        Pending ACH
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5">
                      <div className="font-bold text-[#141414]">Arbor Design Ltd</div>
                      <div className="text-[11px] text-[#575757]">Contract Renewal</div>
                    </td>
                    <td className="py-2.5 font-semibold text-[#141414] tabular-nums">$6,400/m</td>
                    <td className="py-2.5 text-right">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#E4F4EC] text-[#144D33]">
                        Renewed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      {/* Global Add/Edit Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveLead}
        initialLead={editingLead}
        existingLeads={leads}
      />

      {/* Global Convert Modal */}
      <ConvertModal
        isOpen={!!convertingLead}
        lead={convertingLead}
        onClose={() => setConvertingLead(null)}
        onConfirmConvert={convertLead}
      />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "WorkNest CRM — Operations Dashboard" },
      { name: "description", content: "Real-time workspace capacity, tour walkthroughs, and active prospect conversion." },
      { property: "og:title", content: "WorkNest CRM — Operations Dashboard" },
      { property: "og:description", content: "Real-time workspace capacity, tour walkthroughs, and active prospect conversion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
