import React from "react";
import Hero from "./hero";
import Products from "./Products/page";
import Fashion from "./Fashion/page";
import News from "./News/page";

function page() {
  return (
    <div>
      <Hero />
      <Products />
      <Fashion />
      <News />
    </div>
  );
}

export default page;
