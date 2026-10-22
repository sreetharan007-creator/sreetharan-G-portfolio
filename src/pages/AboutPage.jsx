import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function AboutPage() {
  return (
    <>
      <About heading="h1" />
      <Skills />
      <Experience />
      <CtaBand />
    </>
  );
}
