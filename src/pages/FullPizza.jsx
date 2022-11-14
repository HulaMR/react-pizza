import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://633b340a471b8c39557e7c35.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилки при отриманні піци! :(');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Loading....';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolores ex odio beatae minus
        ad molestias, asperiores autem natus aliquam eaque in voluptate, ipsa veritatis nam
        repellendus similique, accusantium sit?
      </p>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
