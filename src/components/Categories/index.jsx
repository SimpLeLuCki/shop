import React from "react";
import styles from "./Categorise.module.scss"

export default function Categories(props) {

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
                <div key={el.key} onClick={()=>props.chooseCategore(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}