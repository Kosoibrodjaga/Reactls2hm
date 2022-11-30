import React from "react";
import buttons from "./Buttons";
import dataCards from "../datacards";
import dataButtons from "../databuttons";
import CardOfProduct from "./Cards";

function Main() {
    let listOfCards = dataCards.map(card => {
        return <CardOfProduct dataCards={card} />
    })
    let listOfButtons = dataButtons.map(button => {
        return (
        <Button button={button} />
        )
    })
}

return (
    <div>
        <h1>Тату машинки</h1>
        <div className="buttons-list">
            {listOfButtons}
        </div>
    </div>
)

export default Main;