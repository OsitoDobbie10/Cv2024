import Container from "@/components/Container";
import CoverParticles from "@/components/CoverParticles";
import Introduction from "@/components/Introduction";
import TransitionPages from "@/components/TransitionPages";
export default function Home() {
  return (
   <Container>
    <TransitionPages/>
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradiant-cover">
    <CoverParticles/>
    <Introduction/>
    </div>
   </Container>
  );
}
