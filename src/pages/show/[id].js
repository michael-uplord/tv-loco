import { useRouter } from 'next/router';

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>; // Show a loading state while the id is being resolved
  }

  return <div>Showing details for ID: {id}</div>;
};

export default ShowPage;
