import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Extracurriculars } from "@/components/Extracurriculars";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";
import { SocialSidebar } from "@/components/SocialSidebar";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("light");
    else root.classList.remove("light");
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg-primary text-text-primary">
      <StarBackground />
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Extracurriculars />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
