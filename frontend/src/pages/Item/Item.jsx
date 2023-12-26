import React, { useEffect } from "react";
import "./Item.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Item() {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return <div></div>;
}

export default Item;
