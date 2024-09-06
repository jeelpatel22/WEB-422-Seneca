import Link from 'next/link';
import { useRouter } from 'next/router';
//import Link from 'next/link';
// import { useAtom } from 'jotai';
// import { cartListAtom } from '@/store';

export default function Layout(props) {
  //  const [cartList, setCartList] = useAtom(cartListAtom);
  //const router = useRouter();
//router.push('/'); // navigate to the home route "/"
  return (
    <>
    
      <h1>Jeel Patel Store</h1>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>  | <Link href="/dashboard">Dashboard</Link> | <Link href="/dashboard/preferences">Dashboard Preferences</Link> | <Link href="/products">Products</Link> 
      <hr />
      <br />
      {props.children}
      <br />
    </>
  );
}