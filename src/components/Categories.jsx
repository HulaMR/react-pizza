import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Всі', "М'ясні", 'Вегатаріанські', 'Морепродукти', 'Гострі'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            className={activeIndex === i ? 'active' : ''}
            onClick={() => onClickCategory(i)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
