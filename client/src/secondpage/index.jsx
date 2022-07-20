import "./navbar2.css";
import { useState } from "react";
import { DefaultContext } from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router";

// jshint ignore:start

const SecondPage = () => {
  const navigate = useNavigate();
  const [searchedItem, setSearchedItem] = useState("");
  const { setTitle, images } = useContext(DefaultContext);
  const [imagesFilter, setImagesFilter] = useState(images)

  const handleItemSearch = (event) => {
    setSearchedItem(event.target.value);
  };

  const searchArray = imagesFilter ? imagesFilter.filter(item =>
    item.title.substring(0, searchedItem.length).toLowerCase() === searchedItem.toLowerCase()) : [];

  const arraySF = !searchedItem ? imagesFilter : searchArray;

  const FilterCategory = (ind) => {
    let arr = [];
    let typer = buttons[ind];
    if (ind === 0) {
      images.forEach((element) => {
        if (element.type === "Обложка") {
          arr.push(element);
        }
      });
    } else {
      images.forEach((element) => {
        if (element.category === typer && element.type === "Обложка") {
          arr.push(element);
        }
      });
    }
    setImagesFilter(arr);
  };

  const handleTitle = (titleTemplate) => {
    setTitle(images.filter((image) => image.title === titleTemplate));
    navigate("/content");
  };
  const buttons = ["Все", "Бизнес", "Творчество", "Блог"];

  return (
    <div className="secondpage">
      <div className="searcher">
        <form className="SecPageForm">
          <div className="SecPageInput">
              <input
                type="text"
                name="search"
                placeholder="Поиск категорий"
                onChange={handleItemSearch}
              />
          </div>
        </form>
        <div className="filterpack">
          <img
            className="filter"
            src={require("../imgs/filter.png")}
            alt="filter icon"
          />
        </div>
      </div>
      <div className="buttonsmap">
        {buttons.map((item, index) => (
          <button
            className="mapbuttons"
            onClick={() => FilterCategory(index)}
            key={index}
          >
            <p className="buttons"> {item}</p>
          </button>
        ))}
      </div>
      <div className="products1">
        {arraySF ? (
          <>
            {arraySF.map((item, index) => {
              return item.type === "Обложка" ? (
                <div key={index} className="subproduct1">
                  <div className="page1">
                    {console.log(item)}
                    <div
                      className="el1"
                      onClick={() => handleTitle(item.title)}
                    >
                      <a>
                        <img
                          className="iproduct1"
                          src={item.image}
                          alt="template"
                        />
                        <p className="stproduct1">{item.title}</p>
                        <p className="mstproduct1">{item.subtitle}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <> </>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SecondPage;
