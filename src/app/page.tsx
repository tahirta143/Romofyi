import React from "react";
import Hero from "../app/Hero/page";
import Products from "./products/page";
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
