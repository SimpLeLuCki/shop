import React from "react";
import { useState, useEffect,createContext,useContext} from "react";
import Header from "./components/Header";
import Items from "./components/Items"
import Footer from "./components/Footer";
import "./index.scss";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem"

const AppContext = createContext();

export default function App() {

  const [items, setItems] = useState([

    {
      id: 1,
      title: 'Смарт-часы Samsung Galaxy Fit1',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '6425'

    },

    {
      id: 2,
      title: 'Смарт-часы Samsung apple Fit1',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'apple',
      price: '8495'
    },

    {
      id: 3,
      title: 'Смарт-часы Samsung apple Fit2',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'apple',
      price: '495'
    },

    {
      id: 4,
      title: 'Смарт-часы Samsung apple Fit3',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'apple',
      price: '2495'
    },

    {
      id: 5,
      title: 'Смарт-часы Samsung Galaxy Fit2',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '5495'
    },

    {
      id: 6,
      title: 'Смарт-часы Samsung Galaxy Fit3',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '6995'
    },

    {
      id: 7,
      title: 'Смарт-часы Samsung Galaxy Fit4',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '6485'
    },

    {
      id: 8,
      title: 'Смарт-часы Samsung Galaxy Fit5',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '3495'
    },

    {
      id: 9,
      title: 'Смарт-часы Samsung Galaxy Fit6',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '5495'
    },

    {
      id: 10,
      title: 'Смарт-часы Samsung Galaxy Fit7',
      img: 'smart watch.webp',
      desc: 'Смарт-часы Samsung Galaxy Fit3 обладают женским календарем, с помощью которого можно контролировать цикл и сопутствующие симптомы. Тренировки в количестве 107 штук позволяют поддерживать физическую форму без посещения тренажерного зала. Точные датчики отслеживают количество пройденных шагов, сожженных калорий, уровень кислорода в крови.',
      category: 'samsung',
      price: '6494'
    },

  ]);

  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullIem,setFullItem]=useState({});

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  }

  const addToOrder = (item) => {
    if (!orders.some((el) => el.id === item.id)) {
      setOrders([...orders, item]);
    }
    /*setOrders([...orders.item]);*/
  }

  const chooseCategore = (category) => {
    if (category === "all") {
      setCurrentItems(items);
    }
    else {
      setCurrentItems(items.filter((el) => el.category === category));
    }
  }

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <AppContext.Provider
      value={
        {
          items,
          setItems,
          orders,
          setOrders,
          currentItems,
          setCurrentItems,
          showFullItem,
          setShowFullItem,
          fullIem,
          setFullItem,
          deleteOrder,
          addToOrder,
          chooseCategore,
          onShowItem,
        }
      }
    >
    <div className="wrapper">
      <Header/>
      <Categories/>
      <Items/>
      {showFullItem && <ShowFullItem/>}
      <Footer />
    </div>
    </AppContext.Provider>
  );
}

