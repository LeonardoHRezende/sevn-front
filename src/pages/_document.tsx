import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="SEVN - Plataforma de notícias" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SEVN - Plataforma de notícias" />
        <meta property="og:description" content="Plataforma de notícias SEVN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sevn.com.br/" />
        <meta property="og:image" content="https://www.sevn.com.br/og-image.jpg" />
        <meta property="og:site_name" content="SEVN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sevn_news" />
        <meta name="twitter:title" content="SEVN - Plataforma de notícias" />
        <meta name="twitter:description" content="Plataforma de notícias SEVN" />
        <meta name="twitter:image" content="https://www.sevn.com.br/twitter-card-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
