import React from "react";
import { useLoaderData } from "react-router-dom";

import "./Detail.sass";
import ContatcInfo from "./Feature/contact-info/ContactInfo";
import PropertyDetail from "./Feature/property-detail/PropertyDetail";

const Detail = () => {
  const data = useLoaderData();

  return (
    <div className="container">
      <div className="detail-grid">
        <PropertyDetail data={data} />
        <ContatcInfo />
      </div>
    </div>
  );
};

export default Detail;
