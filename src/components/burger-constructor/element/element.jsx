import React from "react";
import PropTypes from 'prop-types';

import styles from "./element.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const ItemConstructor = ({imageSource, name, price, position}) => {
    const type = position === "first" ? "top" : (position === "last" ? "bottom" : "none");
    const isNotFirstOrLast = position !== "first" && position !== "last";

    return (
        <div className={styles.element}>
            {isNotFirstOrLast && <DragIcon type="primary"/>}
            <ConstructorElement
                type={type}
                isLocked={!isNotFirstOrLast}
                text={name}
                price={price}
                thumbnail={imageSource}
                extraClass={!isNotFirstOrLast && "ml-8"}
            />
        </div>
    )
};

ItemConstructor.propTypes = {
    imageSource: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    isLocked: PropTypes.bool,
    position: PropTypes.oneOf(['first', 'last', 'none'])
}

