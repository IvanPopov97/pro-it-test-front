import React from "react";
import '../componentStyles/Tree.css'

const EmployeeTree = () => {
    return (
        <ul className="Tree">
            <li>
                <span className="Closed-composite">Напитки</span>
                <ul className="Child-nodes">
                    <li>Вода</li>
                    <li>Кофе</li>
                    <li>
                        <span className="Closed-composite">Чай</span>
                        <ul className="Child-nodes">
                            <li>Чёрный чай</li>
                            <li>Белый чай</li>
                            <li>
                                <span className="Closed-composite">Зелёный чай</span>
                                <ul className="Child-nodes">
                                    <li>Колодец Дракона</li>
                                    <li>Ворсистые пики Желтых Гор</li>
                                    <li>Главарь обезьян из Хоукена</li>
                                </ul>
                            </li>
                            <li>
                                <span className="Closed-composite">Зелёный чай</span>
                                <ul className="Child-nodes">
                                    <li>Колодец Дракона</li>
                                    <li>Ворсистые пики Желтых Гор</li>
                                    <li>Главарь обезьян из Хоукена</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default EmployeeTree;