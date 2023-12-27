import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const [page, setPage] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getPage = async () => {
    const results = await axios.get(`	
    http://localhost:4001/products/${params.productId}`);
    setPage(results.data.data);
  };

  useEffect(() => {
    getPage();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{page.name}</h2>
        <p>{page.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
