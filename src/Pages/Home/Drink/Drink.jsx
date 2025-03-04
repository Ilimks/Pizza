import { useState } from "react";
import "./Drink.css";
import filter from "./img/Filter.svg";

const drinksData = [
  { id: 1, img: "/img/drink1.svg", name: "Энергетик ", title: "Состав: Таурин, Сахар, Женьшень, Кофеин", price: 500, type: "коктейль", tags: ["хит", "освежающий"] },
  { id: 2, img: "/img/drink2.svg", name: "Пепси Max", title: "Состав: Вода, Ароматизатор пищевой, Подсластитель", price: 450, type: "коктейль", tags: ["новинка", "без сахара"] },
  { id: 3, img: "/img/drink3.svg", name: "Пепси", title: "Состав: Вода, Сахар, Кофеин, Ароматизатор", price: 550, type: "коктейль", tags: ["с алкоголем"] },
  { id: 4, img: "/img/drink4.svg", name: "Пепси Черри", title: "Состав: Вода, Краситель Е150d, Подсластители, Ароматизатор", price: 300, type: "сок", tags: ["вегетарианский"] },
  { id: 5, img: "/img/drink5.svg", name: "Пепси Зеро", title: "Состав: Вода, Ароматизатор Пищевой, Подсластитель", price: 250, type: "сок", tags: ["с цитрусом"] },
  { id: 6, img: "/img/drink6.svg", name: "Миринда", title: "Состав: Сахар, Газированная вода, Стабилизаторы", price: 350, type: "напиток", tags: ["без сахара", "моцарелла"] },
  { id: 7, img: "/img/drink7.png", name: "Мохито", title: "Состав: Лимон, лайм, свежая мята, тростниковый сахар", price: 400, type: "напиток", tags: ["с сахаром", "чёрный"] },
  { id: 8, img: "/img/drink8.png", name: "Смузи манго", title: "Состав: Клубника, молоко, йогурт, банан", price: 600, type: "смузи", tags: ["с фруктами"] },
];

export default function DrinksMenu() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes((prevTypes) =>
      prevTypes.includes(type) ? prevTypes.filter((t) => t !== type) : [...prevTypes, type]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedTypes([]);
  };

  const applyFilters = () => {
    setFilterOpen(false); 
  };

  const filteredDrinks = drinksData.filter((drink) => {
    const hasTags = selectedTags.length ? selectedTags.every((tag) => drink.tags.includes(tag)) : true;
    const hasType = selectedTypes.length ? selectedTypes.includes(drink.type) : true;
    return hasTags && hasType;
  });

  return (
    <section className="drinks">
      <div className="container">
        <div className="drinks__content">
          <h2>Напитки</h2>
          <button className="drinks__filter-button" onClick={() => setFilterOpen(true)}>
            <img src={filter} alt="filter" />Фильтры
          </button>
        </div>

        {filterOpen && (
          <div className="filter-overlay" onClick={() => setFilterOpen(false)}>
            <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setFilterOpen(false)}>×</button>
              <h2>Фильтры</h2>

              <h3>Общее</h3>
              <div className="tags">
                {['хит', 'новинка', 'с алкоголем', 'вегетарианский', 'с цитрусом', 'без сахара'].map((tag) => (
                  <span key={tag} className={selectedTags.includes(tag) ? "active-tag" : "tag"} onClick={() => toggleTag(tag)}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3>Типы напитков</h3>
              <div className="tags">
                {['коктейль', 'сок', 'напиток', 'смузи'].map((type) => (
                  <span key={type} className={selectedTypes.includes(type) ? "active-tag" : "tag"} onClick={() => toggleType(type)}>
                    {type}
                  </span>
                ))}
              </div>

              <div className="filter-buttons">
                <button className="reset-button" onClick={clearFilters}>Сбросить</button>
                <button className="apply-button" onClick={applyFilters}>Применить</button>
              </div>
            </div>
          </div>
        )}

        <div className="drinks-grid">
          {filteredDrinks.map((drink) => (
            <div key={drink.id} className="drink-card">
              <img src={drink.img} alt={drink.name} />
              <div className="drink-box">
                <h3>{drink.name}</h3>
                <p>{drink.title}</p>
                <div className="drink-fox">
                  <button>Выбрать</button>
                  <p>{drink.price}₽</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
