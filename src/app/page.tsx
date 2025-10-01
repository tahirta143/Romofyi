import React from "react";
import Hero from "./hero";
import Products from "./Products/page";
import Fashion from "./Fashion/page";
import News from "./News/page";

export default function Page() {
  return (
    <div>
      <Hero />
      <Products />
      <Fashion />
      <News />
    </div>
  );
}
