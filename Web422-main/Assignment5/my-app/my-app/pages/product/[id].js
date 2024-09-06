import { useRouter } from 'next/router';


export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Product: {id}</p>
}
// export default function Product() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         if (id) {
//           const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//           const data = await response.json();
//           setProduct(data);
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <ProductDetails product={product} />
//     </div>
//   );
// }
