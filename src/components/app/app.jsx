import styles from "./app.module.css";
import {AppHeader} from "../header/header";
import {BurgerIngredients} from "../ingredients/ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";

import {data} from "../../utils/data";

function App() {
    return (
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients data={data}/>
                <BurgerConstructor data={data}/>
            </main>
        </div>
    );
}

export default App;
