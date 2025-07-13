import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "InsurX - AI-Powered Insurance Automation Platform",
  description = "Transform your insurance agency with cutting-edge AI solutions for lead capture, customer support, quote generation, and workflow automation. Boost conversion rates by 25% and save 15+ hours weekly.",
  keywords = "insurance AI, automation, agency software, InsurX, lead generation, customer support, quote generation, CRM integration, insurance technology",
  image = "https://insurx.com/logo.png",
  url = "https://insurx.com",
  type = "website",
  noIndex = false,
  structuredData
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title></title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="InsurX" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content="" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="InsurX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 