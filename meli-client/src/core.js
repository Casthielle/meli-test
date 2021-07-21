import { Fragment, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./views/header";
import Routes from "./routes";
import ProductsProvider from "./context/products/Provider";
import ScrollToTop from "./components/ScrollToTop";
import Breadcrumb from "./components/Breadcrumb";

const Core = () => (
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <Fragment>
          <ScrollToTop />
          <Header />
          <Breadcrumb />
          <Routes />
        </Fragment>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>
);

export default Core;
