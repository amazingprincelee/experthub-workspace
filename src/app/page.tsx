import Hero from "@/components/hero/hero";
import Advantages from "@/components/advantage-component/advantage";
import WorkspaceSlider from "@/components/workspace/workspace-slider";
import HybridWorkspace from "@/components/workspace/hybrid-workspace";
import FindAPerfect from "@/components/workspace/find-a-perfect";
import OnlineWorkspace from "@/components/workspace/online-workspace";
import PerfectMembership from "@/components/workspace/perfect-membership";
import ReadyToCustomize from "@/components/workspace/ready-to-customize";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Advantages />
      <WorkspaceSlider />
      <HybridWorkspace />
      <FindAPerfect />
      <OnlineWorkspace />
      <PerfectMembership />
      <ReadyToCustomize />
    </div>
  );
}
