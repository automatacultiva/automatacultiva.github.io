import {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="An company profile of Automata Cultiva, an Aeroponic farming services company"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="tags"
          content="web,app,ui,maintenance,company,collosal,profile"
        />
        <link
          rel="shortcut icon"
          href="/images/logo-without-stamp.png"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
