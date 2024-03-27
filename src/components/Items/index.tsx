import React from "react";
import Item from "../Item/index.tsx"
import styles from "./Items.module.scss"
import { useAppContext } from "./../../UseAppContext.tsx";


const Items:React.FC=()=>{

    const {currentItems} = useAppContext();

    return (
        <main>
            {currentItems.map((el:any) => (
                <Item key={el.id} item={el} />
            ))}
        </main>
    );

};

export default Items;