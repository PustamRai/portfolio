import React from "react";
import { Helmet } from "react-helmet";

function MetaData({ title, description, keywords, image }) {
  return (
    <Helmet>
      <title>{title || ""}</title>
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />
      <meta name="author" content="Pustam Rai" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title || ""} />
      <meta property="og:description" content={description || ""} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default MetaData;
