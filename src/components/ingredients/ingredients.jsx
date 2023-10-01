import React from "react";
import styles from "./ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngredientCard} from "./card/card";


export function BurgerIngredients({data}) {
    const [current, setCurrent] = React.useState('one');

    const getRandomInt = () => Math.floor(Math.random() * 2);
    const renderIngredients = (data, itemType) => {
        return (
            data
                .filter((item) => item.type === itemType)
                .map((item) => (
                    <li className={styles.card} key={item._id}>
                        <IngredientCard
                            counter={getRandomInt()}
                            imageSource={item.image}
                            price={item.price}
                            name={item.name}/>
                    </li>
                ))
        );
    }

    return (
        <section>
            <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <div style={{display: 'flex'}} className="mt-5 mb-10">
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles.scroll} custom-scroll`}>
                <h2 className="text text_type_main-medium mt-10">Булки</h2>
                <ul className={styles.list}>
                    {renderIngredients(data, 'bun')}
                </ul>
                <h2 className="text text_type_main-medium mt-10">Соусы</h2>
                <ul className={styles.list}>
                    {renderIngredients(data, 'sauce')}
                </ul>
                <h2 className="text text_type_main-medium mt-10">Начинки</h2>
                <ul className={styles.list}>
                    {renderIngredients(data, 'main')}
                </ul>
            </div>
        </section>
    );
}