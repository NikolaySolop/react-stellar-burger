import React from "react";
import styles from "./header.module.css";

import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href={"#"} className={styles.link}>
                    <BurgerIcon type="primary"/>
                    <p className="text text_type_main-default">Конструктор</p>
                </a>
                <a href={"#"} className={styles.link}>
                    <ListIcon type="secondary"/>
                    <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                </a>
            </nav>
            <Logo/>
            <a href={"#"} className={styles.profile}>
                <ProfileIcon type="secondary"/>
                <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
            </a>
        </header>
    );
};