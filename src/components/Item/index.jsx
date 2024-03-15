import React from "react";
import styles from "./Item.module.scss"

export default function Items(props){
    return(
        <div className={styles.item}>
            <img src={"./images/"+props.item.img} alt="Error"></img>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <div className={styles.addToCart}>+</div>
        </div>
    )
}