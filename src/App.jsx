import React from "react";
import {
  Hero,
  CustomerReviews,
  PopularProducts,
  Footer,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r">
        <Hero />{" "}
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>{" "}
      <section className="padding bg-black padding-x padding-t">
        <Footer />
      </section>
    </div>
  );
};

export default App;
