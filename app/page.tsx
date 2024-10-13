import Header from "@/components/Header";
import Sidebar from "../components/Sidebar";
import ProjectOverviewCard from "@/components/ProjectOverviewCard";
import DocumentRepository from "@/components/DocumentRepositoryCard";
import ProjectTimelineCard from "@/components/ProjectTimelineCard";
import ComplianceSectionCard from "@/components/ComplianceSectionCard";

export default function Home() {
  return (
    <div className="flex flex-row bg-gray-100">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="grid grid-cols-5 h-screen">
          <div className="col-span-3 p-4">
            <ProjectOverviewCard />
          </div>
          <div className="p-4 col-span-2">
            <DocumentRepository />
          </div>
          <div className="p-4 col-span-2">
            <ProjectTimelineCard />
          </div>
          <div className="p-4 col-span-3">
            <ComplianceSectionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
