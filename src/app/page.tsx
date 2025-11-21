import Call from "@/components/call";
import Fact from "@/components/fact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Growth from "@/components/growth";
import Projects from "@/components/projects";
import Seo from "@/components/seo";
import Support from "@/components/support";
import Who from "@/components/who";
import HomePage from "@/components/home";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-stretch justify-start gap-10 overflow-x-hidden bg-[#000A1F] px-4 py-10">  
    <div className="flex w-full flex-1 flex-col justify-center">
        <HomePage />
      </div> 
      <div className="flex w-full flex-1 flex-col justify-center">
        <Features />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Who />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Growth />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Projects />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Seo />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Fact />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Support />
      </div>
      <div className="flex w-full flex-1 flex-col justify-center">
        <Call />
      </div>
      <Footer />
    </div>
  );
}
