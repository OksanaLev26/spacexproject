import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

import "./App.css";
import { Crew } from './pages/crew/Crew';
import { Homepage } from './pages/homepage/Homepage';
import { CrewItem } from './pages/crewItem/CrewItem';
import { Capsules } from './pages/capsules/Capsules';
import { Dragons } from './pages/dragons/Dragons';
import { DragonItem } from './pages/dragonItem/DragonItem';
import { BurgerMenu } from './components/burgerMenu/BurgerMenu';
import { Header } from './components/navigation/Header';


const API = "https://api.spacexdata.com/v4";

export const App = () => {
  const [crew, setCrew] = useState(null);
  const [company, setCompany] = useState(null);
  const [dragons, setDragons] = useState(null);
  const [capsules, setCapsules] = useState(null);
  const [hamburgerIsOpen, setHamburgerOpen] = useState(false);

  const handleSetHamburgerOpen = (isOpen) => {
    setHamburgerOpen(isOpen);
  };

  useEffect(() => {
    const getCapsules = async () => {
      const res = await fetch(`${API}/capsules`);
      const data = await res.json();
      const newCapsules = data.map((item) => [
        {
          key: "Capsule type:",
          value: item.type,
        },
        {
          key: "Serial number:",
          value: item.serial,
        },
        {
          key: "Status:",
          value: item.status,
        },
        {
          key: "Water landings:",
          value: item.water_landings,
        },
        {
          key: "Land landings:",
          value: item.land_landings,
        },
        {
          key: "Land landings:",
          value: item.land_landings,
        },
        {
          key: "Reuse count:",
          value: item.reuse_count,
        },
      ]);
      setCapsules(newCapsules);
    };

    getCapsules();
  }, []);

  useEffect(() => {
    const getDragons = async () => {
      const res = await fetch(`${API}/dragons`);
      const data = await res.json();
      setDragons(data);
    };

    getDragons();
  }, []);

  useEffect(() => {
    const getCompany = async () => {
      const res = await fetch(`${API}/company`);
      const data = await res.json();
      setCompany(data);
    };

    getCompany();
  }, []);

  useEffect(() => {
    const getCrew = async () => {
      const res = await fetch(`${API}/crew`);
      const data = await res.json();
      setCrew(data);
    };

    getCrew();
  }, []);

  return (
    <div className="app">
      <Header
        hamburgerIsOpen={hamburgerIsOpen}
        setHamburgerOpen={handleSetHamburgerOpen}
      />
      <Routes>
        <Route path="/" element={<Homepage company={company} />} />
        <Route path="/crew" element={<Crew propCrew={crew} />} />
        <Route path="/crew/:id" element={<CrewItem />} />
        <Route path="/capsules" element={<Capsules propCapsules={capsules} />} />
        <Route path="/dragons" element={<Dragons propDragons={dragons} />} />
        <Route path="/dragons/:id" element={<DragonItem />} />
      </Routes>
      {hamburgerIsOpen && (
        <BurgerMenu
          hamburgerIsOpen={hamburgerIsOpen}
          setHamburgerOpen={handleSetHamburgerOpen}
        />
      )}
    </div>
  );
};