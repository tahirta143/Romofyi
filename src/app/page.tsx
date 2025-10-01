import React from "react";
import Hero from "./hero/page";
import Product from "./products/page";
import Fashion from "./fashion/page";
import News from "./news/page";

export default function Page() {
  return (
    <div>
      <Hero />
      <Product />
      <Fashion />
      <News />
    </div>
  );
}
