import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechCallout from "@/components/TechCallout";
import ArticleGrid from "@/components/ArticleGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-graphite text-bone">
      <Navigation />
      <main>
        <Hero />
        <TechCallout />
        <ArticleGrid />
      </main>
      <Footer />
    </div>
  );
}
