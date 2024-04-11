import React, { useState, useEffect, useRef, useContext } from "react";
import "./main.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import Home from "./Home";
import Categories from "./Categories";
import MyLibrary from "./MyLibrary";
import Bag from "./Bag";
import { AppContext } from "../App";

const Main = () => {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);
  const { library, bag } = useContext(AppContext);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },
  ];

  function handleToggleActive() {
    setActive(!active);
  }

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch("http://localhost:3000/api/gameApi.json")
      .then((res) => res.json())
      .then((json) => {
        setGames(json);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggle={handleToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <Home games={games} reference={homeRef} />
          )}
          {games && games.length > 0 && (
            <Categories games={games} reference={categoriesRef} />
          )}
          {games && games.length > 0 && (
            <MyLibrary games={library} reference={libraryRef} />
          )}
          {games && games.length > 0 && <Bag games={bag} reference={bagRef} />}
        </div>
      </div>
    </main>
  );
};

export default Main;
