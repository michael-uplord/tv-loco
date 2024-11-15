import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import Banner from '../../components/Banner';

import { fetchShow } from '../../store/showStore';

export const metadata = {
  title: "tvLoco",
  description: "tvLoco",
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: { id },
  };
}

export default function ShowPage({ id }) {
  const dispatch = useDispatch();
  const { show, loading, error } = useSelector((state) => state.show);

  useEffect(() => {
    dispatch(fetchShow(id));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Banner title={show.name} />
    </>
  )
}