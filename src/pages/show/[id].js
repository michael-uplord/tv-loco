import Head from 'next/head';
import Banner from '../../components/Banner';

export const metadata = {
  title: "tvLoco",
  description: "tvLoco",
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return {
    props: { show },
  };
}

export default function ShowPage({ show }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Banner title={show.name} />
    </>
  );
}
