import Link from "next/link";
import { useCart } from ".//CartContext";

function Navbar() {  const { cartItems } = useCart();

  return (
    <>
    
      <h1>Jeelkumar Patel&apos;s Store</h1>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> |  <Link href="/products">Products</Link> | <Link href="/Cart">Shopping Cart </Link> ({cartItems.length})
      <hr />
      <br />
      <br />
    </>
  );
}

export default Navbar;
