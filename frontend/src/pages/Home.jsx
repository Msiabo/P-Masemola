import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeGetInvolved from "../components/HomeGetInvolved";
import HomePillars from "../components/HomePillars";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* About Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <HomeAbout />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <HomePillars />
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <HomeGetInvolved />
        </div>
      </section>
    </div>
  );
};

export default Home;
