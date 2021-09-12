import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backImage="model-s.jpg"
        leftbtn="Custom Order"
        rightBtn="Existing  Inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backImage="model-y.jpg"
        leftbtn="Custom Order"
        rightBtn="Existing  Inventory"
      />

      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backImage="model-3.jpg"
        leftbtn="Custom Order"
        rightBtn="Existing  Inventory"
      />

      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backImage="model-x.jpg"
        leftbtn="Custom Order"
        rightBtn="Existing  Inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee "
        backImage="solar-panel.jpg"
        leftbtn="Order Now"
        rightBtn="Learn more"
      />

      <Section
        title=" Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
        backImage="solar-roof.jpg"
        leftbtn="Order Now"
        rightBtn="Learn more"
      />
    </div>
  );
}

export default Home;
