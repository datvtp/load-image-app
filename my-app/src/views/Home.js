import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Home = () => {
  const url = `https://fakestoreapi.com/products`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const style = { height: "333px", width: "300px" };

  let content = null;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) => {
        setProducts({
          loading: false,
          data: res.data,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (products.error) {
    content = (
      <div>
        <h1>Error. Please try again.</h1>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div className="mb-4 w-full border-b text-center">
        <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
        <div className="flex justify-center">
          <Link to={`/products/${product.id}`}>
            <img style={style} src={product.image} alt={product.name} />
          </Link>
        </div>
        <div className="font-bold text-xl mb-3 mt-5">{product.price}$</div>
        <div className="font-bold text-xl mb-3">{product.category}</div>
      </div>
    ));
  }

  return (
    <div>
      <div className="">{content}</div>
    </div>
  );
};

export default Home;
