import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/Banner';
import Svg from '../components/Svg';

import { fetchShows } from '../store/showsStore';

export const metadata = {
  title: "tvLoco - Show Search",
  description: "tvLoco",
};

export default function Home() {
  const dispatch = useDispatch();
  const { shows, loading, error, query } = useSelector((state) => state.shows);

  const handleQueryChange = (searchQuery) => {
    dispatch(fetchShows(searchQuery));
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Banner title={"Find your TV series"} subtitle={"Enter a series below"} onQueryChange={handleQueryChange} showSearch={true} />
      <div className="">
        <div className="container">
          {loading ? (
              <p className="text-center">Loading</p>
          ) : shows.length  ? (
            <div className="shows">
              {shows.map((data, index) => (
                <a key={index} href={`/show/${data.show.id}`} className="show">
                  <div className="image">
                    {data.show.image?.original ? (
                      <Image
                        src={data.show.image.original}
                        alt="Front End Development"
                        width="500"
                        height="617"
                        priority={true}
                      />
                    ) : (
                      <Svg name="image-regular" width={32} height={32} />
                    )}
                  </div>
                  <div className="text">
                    <h3>{data.show.name}</h3>
                    <p className="language">Language - English</p>
                    {data.show.rating?.average && (
                      <p className="rating">
                        <Svg name="star-solid" width={20} height={20} />
                        {data.show.rating.average}
                      </p>
                    )}
                    <p className="status">
                      <span
                        className={`${
                          data.show.status === "Ended"
                            ? "error"
                            : data.show.status === "To Be Determined" || data.show.status === "In Development"
                            ? "info"
                            : ""
                        }`}
                      >
                        {data.show.status}
                      </span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            query && <p className="text-center">No shows were found</p> 
          )}
        </div>
      </div>
    </>
  )
}