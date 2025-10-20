import Hero from "../components/Home/Hero";
import MissionStatement from "../components/Home/Statement";
import Services from "../components/Home/Services";
import Mission from "../components/Home/Mission";
import MainLayout from "../components/layout/MainLayout";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <MissionStatement />
      <Services />
      <Mission />
    </MainLayout>
  );
};

export default Home;
