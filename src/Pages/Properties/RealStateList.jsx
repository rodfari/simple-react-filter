import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Cards/Card";
import "./RealStateList.sass";
import { useFilterHook } from "../../Hooks/useFilterHook";
import Filter from "./Feature/Filter/Filter";


const RealStateList = () => {
  const { filter, properties } = useFilterHook(useLoaderData());
  const [rangeValue, setRangeValue] = useState(1000000);
  const data = properties;

  return (
    <div className="container">
      <div className="filter">
        <Filter filter={filter} rangeValue={rangeValue} setRangeValue={setRangeValue} />
      </div>
      { data.map((item, index) => (
        <Card item={item} key={index} />
      )) }
    </div>
  );
};

export default RealStateList;
