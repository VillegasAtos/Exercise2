 const getRows = () => {
        let productsRows = [];
        for (let i = 0; i < products[0].finishes.length; i++) {
            let objectRows = {};
            objectRows.finish = products[0].finishes[i].finish;
            for (let j = 0; j < products.length; j++) {
                objectRows["price" + j] = products[j].finishes[i].price;
            }
            productsRows.push(objectRows);
        }
        return productsRows;
    };
    const addUpgrade = (upgradePrice, id) => {
        setPrice(Number(price) + Number(upgradePrice));
        document.getElementById(`Add${id}`).hidden = true;
        document.getElementById(`Remove${id}`).hidden = false;
    };
    const RemoveUpgrade = (upgradePrice, id) => {
        setPrice(Number(price) - Number(upgradePrice));
        document.getElementById(`Add${id}`).hidden = false;
        document.getElementById(`Remove${id}`).hidden = true;
    };
       const searchPrice = () => {
        if (searchProduct !== "" && searchFinish !== "") {
            document.getElementById(`TableUpgrades`).hidden = false;
            return(
                products
                    .find((product) => product.product === searchProduct)
                    .finishes.find((finish) => finish.finish === searchFinish).price
            );
        } else {
            document.getElementById(`TableUpgrades`).hidden = true;
            return("");
        }
        
    };
    export { getRows, addUpgrade, RemoveUpgrade,searchPrice };