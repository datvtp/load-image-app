import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Product = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let content = null;
  const style = { height: "333px", width: "300px" };

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) => {
        setProduct({
          loading: false,
          data: res.data,
          error: false,
        });
      })
      .catch(() => {
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  if (product.error) {
    content = (
      <div>
        <h1>Error. Please try again.</h1>
      </div>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.title}</h1>
        <div>
          <img style={style} src={product.data.image} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3 mt-5">{product.data.price}$</div>
        <div className="font-bold text-xl mb-3">{product.data.category}</div>
      </div>
    );
  }

  return <div className="flex justify-center">{content}</div>;
};

export default Product;
