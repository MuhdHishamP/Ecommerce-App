import React, { useState, useEffect } from "react";
import "./Posts.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/").then((res) => setProduct(res.data));
  }, []);
  return (
    <div>
      <div className="card-container">
        {product.map((item) => {
          return (
            <Card
              style={{ paddingBottom: 0 }}
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img alt="Sample" src={item.image} height={190} />
              <CardBody style={{ paddingLeft: 0 }}>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  {item.description}
                </CardSubtitle>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
