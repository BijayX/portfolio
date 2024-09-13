import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { ProProjects } from '@/components/proprojects';
import { SectionDivider } from '@/components/section-divider';
import { projectsData } from '@/lib/data';
const Home = async () => {
  const starsCount = await Promise.all(
    projectsData.map(async ({ links }) => {
      const res = await fetch(links.githubApi, { cache: 'no-store' });
      const data = await res.json();
      return data.stargazers_count;
    })
  );
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Projects starsCount={starsCount} />
        <ProProjects starsCount={starsCount} />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Home;
