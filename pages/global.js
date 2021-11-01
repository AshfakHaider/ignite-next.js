import React from 'react';
import Head from 'next/head';
import IndexGlobal from '../src/views/Global/IndexGlobal';

const global = () => {
    return (
        <div>
              <Head>
                <title>Global | IYF</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexGlobal/>
        </div>
    );
};

export default global;