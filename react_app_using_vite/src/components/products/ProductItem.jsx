import React from "react";
import styles from "./style.module.css";

function ProductItem({ product }) {
  return (
    <div>
      <p className={styles.productTitle} >{product}</p>
    </div>
  );
}

export default ProductItem;
