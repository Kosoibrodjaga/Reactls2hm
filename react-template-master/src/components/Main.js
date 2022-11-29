import React from "react";
import Card from "./Product";
import data from "../data";

function Main() {
    const first = data[0]
    const second = data[1]
    const third = data[3]
    const fourth = data[4]
    return (
        <div className="card-wrapper">
            <Card data={first} />
            <Card data={second} />
            <Card data={third} />
            <Card data={fourth} />
        </div>
    )
}

export default Main;
