import React from "react";
import Hero from "./hero/page";

import Fashion from "./fashion/page";
import News from "./news/page";
import Products from "./products/page";

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
