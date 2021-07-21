import { Breadcrumb } from "react-bootstrap";
import { useContext } from "react";
import ProductContext from "../../context/products";

import "./style.css";

const BreadcrumbTemplate = () => {
  const { categories } = useContext(ProductContext);

  return (
    <div className="breadcrumb-wrapper">
      <Breadcrumb>
        {categories?.map((item) => (
          <Breadcrumb.Item key={item.id} active>
            {item.name}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbTemplate;
