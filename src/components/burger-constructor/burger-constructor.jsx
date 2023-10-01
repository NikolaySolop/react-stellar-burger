import React from "react";

import styles from "./burger-constructor.module.css";
import {ItemConstructor} from "./element/element";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


export const BurgerConstructor = ({data}) => {
        const selectedItems = [0, 5, 4, 7, 8, 8, 0];

        const renderIngredients = (data) => {
            return selectedItems.map((index, arrayIndex) => {
                const isFirst = arrayIndex === 0;
                const isLast = arrayIndex === selectedItems.length - 1;

                const position = isFirst ? "first" : isLast ? "last" : "none";
                const name = isFirst ? `${data[index].name} (вверх)` : isLast ? `${data[index].name} (низ)` : data[index].name;

                return (
                    <ItemConstructor
                        key={index}
                        position={position}
                        name={name}
                        price={data[index].price}
                        imageSource={data[index].image}
                    />
                );
            });
        };


        return (
            <section>
                <ul className={`${styles.list} custom-scroll`}>
                    {renderIngredients(data)}
                </ul>
                <div className={styles.order}>
                    <p className="text text_type_digits-medium mr-2">650</p>
                    <CurrencyIcon/>
                    <Button htmlType="button" type="primary" size="large" extraClass="ml-10">
                        Оформить заказ
                    </Button>

                </div>
            </section>
        )
    }
;

