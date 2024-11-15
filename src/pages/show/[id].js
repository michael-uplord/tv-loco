import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Banner from '../../components/Banner';

export const metadata = {
  title: "tvLoco",
  description: "tvLoco",
};

export default function ShowPage() {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
    </>
  )
}