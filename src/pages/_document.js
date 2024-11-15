import { Html, Head, Main, NextScript } from 'next/document';
// import Script from "next/script";

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="preload"
          href="/js/script.js"
          as="script"
          type="text/javascript"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script
          src="/js/script.js"
          type="text/javascript"
          strategy="beforeInteractive"
        /> */}
      </body>
    </Html>
  );
}
