import getSingleProduct from "@/utils/getSingleProduct";


export const revalidate = 0;

const ProductDetails = async ({ params: { id } }) => {
  const product = await getSingleProduct(id);
  console.log("Single Product Data", product);
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;
