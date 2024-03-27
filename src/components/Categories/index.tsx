import React, {useContext} from "react";
import styles from "./Categorise.module.scss";
import { useAppContext } from "./../../UseAppContext.tsx";


interface Category{
    key:string;
    name:string;
}

const Categories:React.FC=()=>{

    const {chooseCategore}=useAppContext();

    const categories:Category[] = [
        {
            key: "all",
            name: "Все"
        },
        {
            key: "apple",
            name: "Apple"
        },
        {
            key: "samsung",
            name: "Samsung"
        }
    ];

    return (
        <div className={styles.categories}>
            {categories.map(el => (
                <div key={el.key} onClick={()=>chooseCategore(el.key)}>{el.name}</div>
            ))}
        </div>
    );
};

export default Categories;