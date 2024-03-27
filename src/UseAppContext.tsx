import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext<any>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Ошибка при получение в useAppContext")
    }

    return context;
}

const  AppProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [items, setItems] = useState<any[]>([{
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
    }]);

    const [orders, setOrders] = useState<any[]>([]);
    const [currentItems, setCurrentItems] = useState<any[]>([]);
    const [showFullItem, setShowFullItem] = useState<boolean>(false);
    const [fullIem, setFullItem] = useState<any>({});

    useEffect(() => {
        setCurrentItems(items);
    }, [items]);

    const deleteOrder = (id:number) => {
        setOrders(orders.filter((el) => el.id !== id));
    }

    const addToOrder = (item:any) => {
        if (!orders.some((el) => el.id === item.id)) {
            setOrders([...orders, item]);
        }
        /*setOrders([...orders.item]);*/
    }

    const chooseCategore = (category:string) => {
        if (category === "all") {
            setCurrentItems(items);
        }
        else {
            setCurrentItems(items.filter((el) => el.category === category));
        }
    }

    const onShowItem = (item:any) => {
        setFullItem(item);
        setShowFullItem(!showFullItem);
    }

    const contextValue = {
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
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
};

export default AppProvider;
