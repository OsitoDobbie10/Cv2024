import CoverParticles from "@/components/CoverParticles";
import Introduction from "@/components/Introduction";
import TransitionPages from "@/components/TransitionPages";
export default function Home() {
  return (
   <main>
    <TransitionPages/>
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradiant-cover">
    <CoverParticles/>
    <Introduction/>
    </div>
   </main>
  );
}
