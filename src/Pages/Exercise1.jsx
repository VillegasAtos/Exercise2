import React, { useState, useEffect } from "react";
import productsJson from "../Data/ProductsJson.json";
import upgradesJson from "../Data/UpgradesJson.json";
import { searchPrice } from "./Functions/Excercise1Functions"
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
            Price: {price}
            <br />
            <br />
            <select
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
            <select
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
            <table>
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
                        ? getRows().map((row, index) => (
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
            <table id="TableUpgrades" hidden={true}>
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
                                    id={`Add${index}`}
                                    onClick={() => addUpgrade(upgrade.price, index)}
                                >
                                    Add
                                </button>

                                <button
                                    id={`Remove${index}`}
                                    hidden={true}
                                    onClick={() => RemoveUpgrade(upgrade.price, index)}
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
