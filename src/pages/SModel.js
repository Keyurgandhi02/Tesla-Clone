import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Section from "../components/Section";

function SModel() {
  const params = useParams();
  const modelName = params.modelId.toUpperCase();

  return (
    <div>
      <Header></Header>
      <Section
        title={`Model ${modelName}`}
        backImage={`model-${params.modelId}.jpg`}
        leftbtn="Custom Order"
        rightBtn="Existing  Inventory"
      ></Section>
    </div>
  );
}

export default SModel;
