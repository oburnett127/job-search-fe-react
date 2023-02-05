import PageContent from '../components/PageContent';
import {Link} from 'react-router-dom';
function HomePage() {
  return (
    <PageContent title="Welcome!">
      <p>There's a job for everyone!</p>
        <Link to={"/findjob"}>Find a job</Link>
        <Link to={"/postjob"}>Post a job</Link>
    </PageContent>
  );
}

export default HomePage;
