import React from "react";
import PropTypes from 'prop-types';

import styles from "./card.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientCard = ({counter, imageSource, price, name}) => (
    <>
        {counter > 0 && <Counter count={counter} size="default"/>}
        <img className="pl-4 pr-4" src={imageSource}/>
        <div className={styles.price}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.text} text text_type_main-default pb-8`}>{name}</p>
    </>
);

IngredientCard.propTypes = {
    counter: PropTypes.number,
    imageSource: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string
}



