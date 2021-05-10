import React from 'react';
import Head from 'next/head';

const SEO: React.FC<SEOProps> = ({ description, keywords, title }) => (
  <Head>
    <title>{title} | Snoopr.io - Photo Services</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.join(', ')} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
   
    <meta property="og:image" content="" />
    <link rel="icon" type="image/png" href="/snoopr-logo.png" />
    <link rel="apple-touch-icon" type="image/png" href="/snoopr-logo.png" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171177495-4"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-171177495-4');
              `,
      }}
    />
  </Head>
);

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

SEO.defaultProps = {
  description: 'Snoopr IO - The best Photo Services',
  keywords: [
    'Photo Services',
  ],
};

export default SEO;
