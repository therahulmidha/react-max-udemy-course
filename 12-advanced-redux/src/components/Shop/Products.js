import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={1}
          title="Test1"
          price={5}
          description="This is the first product!"
        />
        <ProductItem
          id={2}
          title="Test2"
          price={10}
          description="This is the second product!"
        />
      </ul>
    </section>
  );
};

export default Products;
