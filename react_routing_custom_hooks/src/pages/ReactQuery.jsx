import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";

function ReactQuery() {
  const [productTitle, setProductTitle] = useState("");
  const getQueryClient = useQueryClient();
  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
  });
  const { mutateAsync: handleNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });
  async function handleNewProduct() {
    await handleNewProductMutation(productTitle);
    setProductTitle("");
  }

  if (isLoading) return <h1>Loading Product</h1>;
  return (
    <div>
      <h1>React Query Demo</h1>
      <div>
        <input
          type="text"
          name="name"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          placeholder="enter title"
        />
        <button
          onClick={handleNewProduct}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add Product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h2>NO product</h2>
        )}
      </ul>
    </div>
  );
}

export default ReactQuery;
