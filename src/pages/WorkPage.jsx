import PageHead from '../components/PageHead.jsx';
import Work from '../components/Work.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function WorkPage() {
  return (
    <>
      <PageHead
        title="Selected work."
        intro="Filter and sort the projects, the same way a shopper would on a collection page. Open any project to see all of its screens."
      />
      <section className="section section--tight">
        <Work />
      </section>
      <CtaBand />
    </>
  );
}
