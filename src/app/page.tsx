import React from "react";
import Hero from "./hero";
import Products from "./Products/page";
import Fashion from "./fashion/page";
import News from "./news/page";

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
