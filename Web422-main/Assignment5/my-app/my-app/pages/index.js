import Hello from '@/components/Hello';
import withAuth from '../components/withAuth';

function Home() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default withAuth(Home);
