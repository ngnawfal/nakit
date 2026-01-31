import CoreCapabilities from "@/components/CoreCapabilities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full max-w-[1600px] mx-auto pt-40 px-6 md:px-12 pb-32">
        <Hero />
        <CoreCapabilities />
        <SelectedWorks />
      </main>
      <Footer />
    </>
  );
}
