import { useState } from "react";

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return { props: { products: data } };
}

const Index = (props) => {
  const [modal, setModal] = useState(null); // State for the modal

  return (
    <section className="productSection">
      {modal && (
        <div className="modalContainer">
          <div className="modalBackground"></div>
          <div className="modal">
            <h1>{modal.title}</h1>
            <h2>productId: {modal.id}</h2>
            <h2>Price: ${modal.price}</h2>
            <h2>Description: {modal.description}</h2>
            <h2>Category: {modal.category}</h2>
            <img src={modal.image} width="80" height="80" alt="" />
            <h2>Rating: {modal.rating.rate}</h2>
            <button onClick={() => setModal(null)}>Close</button>
          </div>
        </div>
      )}

      <table className="productTable table table-striped-new">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item) => (
            <tr
              key={item.id}
              onClick={() => setModal(item)} // Set the clicked item as the modal content
            >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td><img src={item.image} width="55" height="35" alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Index;