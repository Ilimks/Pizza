
import { useState } from "react";
import "./Sushi.css";
import filter from "./img/Filter.svg"
const sushiData = [
  { id: 1, img:"/img/sushi1.svg", name: "Суши сяке", title:"Состав: Семга, рис, сыр креметто, соус унаги", price: 500, type: "роллы", tags: ["хит", "с сыром"] },
  { id: 2,  img:"/img/sushi2.svg",  name: "Гункан эби", title:"Состав: Креветка тигровая, рис, соус спайси, нори", price: 450, type: "роллы", tags: ["новинка", "без лука"] },
  { id: 3,  img:"/img/sushi3.svg",  name: "Гункан эби хот", title:"Состав: креветка, рис, нори, соус розовый, соус унаги,...", price: 550, type: "роллы", tags: ["с мясом"] },
  { id: 4,  img:"/img/sushi4.svg",  name: "Гункан тунец", title:"Состав: Тунец, рис, соус спайси, нори", price: 300, type: "нигири", tags: ["вегетарианская"] },
  { id: 5,  img:"/img/sushi5.svg",  name: "Гункан тунец хот", title:" Состав: Тунец, рис, соус розовый, соус унаги", price: 250, type: "нигири", tags: ["с курицей"] },
  { id: 6,  img:"/img/sushi6.svg",  name: "Гункан сяке", title:"Состав: лосось, рис, нори, соус спайси", price: 350, type: "нигири", tags: ["без лука", "моцарелла"] },
  { id: 7,  img:"/img/sushi7.svg",  name: "Гункан сяке хот", title:"Состав: лосось, рис, нори, соус розовый, соус унаги, кунжут...", price: 400, type: "роллы", tags: ["с сыром", "чеддер"] },
  { id: 8,  img:"/img/sushi8.svg",  name: "Кани, Кани суши", title:"Состав: Тунец, рис, соус розовый, соус унаги", price: 600, type: "гункан", tags: ["сыр реджанито"] },
];

export default function SushiMenu() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredSushi = selectedTags.length
    ? sushiData.filter((sushi) => selectedTags.every((tag) => sushi.tags.includes(tag)))
    : sushiData;

  return (
    <section className="sushi">
    <div className="container">
      <div className="sushi__content">
        <h2>Суши</h2>
        <button className="sushi__filter-button" onClick={() => setFilterOpen(true)}><img src={filter} alt="filter" />Фильтры</button>
      </div>

      {filterOpen && (
        <div className="filter-overlay" onClick={() => setFilterOpen(false)}>
          <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setFilterOpen(false)}>×</button>
            <h2>Фильтры</h2>
            
            <h3>Общее</h3>
            <div className="tags">
              {['хит', 'новинка', 'с мясом', 'вегетарианская', 'с курицей', 'без лука'].map((tag) => (
                <span key={tag} className={selectedTags.includes(tag) ? "active-tag" : "tag"} onClick={() => toggleTag(tag)}>
                  {tag}
                </span>
              ))}
            </div>

            <h3>Сыры</h3>
            <div className="tags">
              {['сыр реджанито', 'моцарелла', 'чеддер'].map((tag) => (
                <span key={tag} className={selectedTags.includes(tag) ? "active-tag" : "tag"} onClick={() => toggleTag(tag)}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="sushi-grid">
        {filteredSushi.map((sushi) => (
          <div key={sushi.id} className="sushi-card">
            <img src={sushi.img} alt="sushi" />
            <div className="sushi-box">
            <h3>{sushi.name}</h3>
            <p>{sushi.title}</p>
           <div className="sushi-fox">
           <button>Выбрать</button>
           <p>{sushi.price}₽</p>
           </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
