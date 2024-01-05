import Button from "./components/Button";
import Form from "./components/Form";

const ProductsPage = ({ searchParams }) => {
   const { status, keyword } = searchParams;
   return (
      <div>
         <h1>Sản phẩm</h1>
         <h2>Status:{status}</h2>
         <h2>Keyword:{keyword}</h2>
         {/* <Button /> */}
         <Form />
      </div>
   );
};

export default ProductsPage;

/*
Cha: Server Component
Con: Server Component
---
Cha ở đâu con ở đấy

*/

// http://localhost:3000/products?status=active&keyword=abc
