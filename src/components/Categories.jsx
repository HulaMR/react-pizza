import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Всі', "М'ясні", 'Вегатаріанські', 'Морепродукти', 'Гострі'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li className={activeIndex === i ? 'active' : ''} onClick={() => onClickCategory(i)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
