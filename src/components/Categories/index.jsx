import React, {useContext} from "react";
import styles from "./Categorise.module.scss";
import { useAppContext } from "../../UseAppContext";

export default function Categories() {

    const {chooseCategore}=useAppContext();

    const categories = [
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
}