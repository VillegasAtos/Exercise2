import React, { useState, useEffect } from "react";
import productsJson from "../Data/ProductsJson.json";
import upgradesJson from "../Data/UpgradesJson.json";
import { searchPrice, getRows, addUpgrade, removeUpgrade } from "./Functions/Excercise1Functions"
function Exercise1() {
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState("");
    const [searchFinish, setSearchFinish] = useState("");
    const [upgrades, setUpgrades] = useState([]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        setProducts(productsJson.products);
        setUpgrades(upgradesJson.upgrades);
    }, []);

    useEffect(() => {
        setPrice(searchPrice(searchProduct, searchFinish, products));
    }, [searchProduct, searchFinish]);

    return (
        <>
            <h1>Exercise 1</h1>
            <h2>Price: {price}</h2>

            <h5>Filter</h5>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Car: </span>
                <select
                    className="form-select"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                >
                    <option value="">Select an option</option>
                    {products.map((product, index) => (
                        <option key={index} value={product.product}>
                            {product.product}
                        </option>
                    ))}
                </select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Finish: </span>
                <select
                    className="form-select"
                    value={searchFinish}
                    onChange={(e) => setSearchFinish(e.target.value)}
                >
                    <option value="">Select an option</option>
                    {products.length > 0
                        ? products[0].finishes.map((finish, index) => (
                            <option key={index} value={finish.finish}>
                                {finish.finish}
                            </option>
                        ))
                        : null}
                </select>
            </div>


            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Finish</th>
                        {products.map((product, index) => (
                            <th key={index}>{product.product}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0
                        ? getRows(products).map((row, index) => (
                            <tr key={index}>
                                <td>{row.finish}</td>
                                <td>{row.price0}</td>
                                <td>{row.price1}</td>
                                <td>{row.price2}</td>
                                <td>{row.price3}</td>
                                <td>{row.price4}</td>
                                <td>{row.price5}</td>
                                <td>{row.price6}</td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
            <table className="table table-light" id="TableUpgrades" hidden={true}>
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {upgrades.map((upgrade, index) => (
                        <tr key={index}>
                            <td>{upgrade.upgrade}</td>
                            <td>{upgrade.price}</td>
                            <td>
                                <button
                                    className="btn btn-success"
                                    id={`Add${index}`}
                                    onClick={() => setPrice(addUpgrade(upgrade.price, index, price))}
                                >
                                    Add
                                </button>

                                <button
                                    className="btn btn-danger"
                                    id={`Remove${index}`}
                                    hidden={true}
                                    onClick={() => setPrice(removeUpgrade(upgrade.price, index, price))}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Exercise1;
