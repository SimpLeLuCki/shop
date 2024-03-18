import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./Header.module.scss";
import Orders from "../Orders";




export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const showOrders = (props) => {
        return (
            <div>
                {props.orders.map(el => (
                    <Orders key={el.id} item={el} />
                ))}
            </div>
        );
    }

    const showNothing = () => {
        return (
            <div className="styles.empty">
                <h2>Товары отсутствуют в корзине</h2>
            </div>
        );
    }

    return (
        <header>
            <div>
                <span className={styles.logo}>Phoen Sell</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <MdOutlineShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`} />

                {cartOpen && (
                    <div className={styles.shopCart}>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()
                        }
                    </div>

                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}