import Head from 'next/head';
import Banner from '../../components/Banner';
import { removeHTMLTags } from '../../utils';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  const show = await res.json();

  return {
    props: { show },
  };
}

export default function ShowPage({ show }) {
  const pageTitle = `tvLoco - ${show.name}`;
  const cleanDescription = removeHTMLTags(show.summary) || "tvLoco";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={cleanDescription} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Banner title={show.name} />
    </>
  );
}
