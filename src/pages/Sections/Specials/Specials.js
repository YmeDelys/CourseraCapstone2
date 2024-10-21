import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [
  {
    id: 1,
    title: "Italian salad",
    description:
      "A vibrant mix of crisp lettuce, ripe tomatoes, red onions, cucumbers, olives, and pepperoncini, topped with Parmesan and dressed in a tangy vinaigrette",
    image:
      "https://zardyplants.com/wp-content/uploads/2020/08/Vegan-Italian-Salad-14-1.jpg",
    price: "$14.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Made with slices of toasted bread rubbed with garlic, drizzled with olive oil, and topped with diced tomatoes, fresh basil, mozzarella, finished with a hint of balsamic glaze.",
    image:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2024/05/Strawberry-Balsamic-Bruschetta-5long.jpg",
    price: "$ 7.99",
  },
  {
    id: 3,
    title: "Tiramissu",
    description:
      "Layers of coffee-soaked ladyfingers, rich mascarpone cream, and dusted with cocoa powder, offering a perfect balance of sweetness and espresso flavor.",
    image:
      "https://www.pimentanoreino.com.br/wp-content/uploads/2022/11/WS_Tiramissu_2.jpg",
    price: "$ 7.99",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
