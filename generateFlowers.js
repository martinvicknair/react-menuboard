let faker = require('faker');
var fs = require('fs');
const fetch = require("node-fetch");

let generateFlowers = () => {
    let flowers = [];

    for (let id = 0; id < 30; id++) {
        let strainName = faker.commerce.productName();
        let strainType = faker.random.arrayElement(["Indica","Sativa","Hybrid"]);
        let priceTier = faker.random.arrayElement(["Top","Premium","Featured"]); 
        let inventoryQuantity = faker.random.number({min:0, max:10});

        flowers.push({
            "id": id,
            "strainName": strainName,
            "strainType": strainType,
            "priceTier": priceTier,
            "inventoryQuantity": inventoryQuantity
        });
    }

fetch("http://localhost:3001/flowers",
{
    method: "POST",
    body: flowers
})
.then(function(res){ return res.json(); })
.then(function(data){ alert( JSON.stringify( flowers ) ) })

    // fs.writeFileSync('db.json', JSON.stringify(flowers, null, '\t'));
    return { "flowers": flowers };
    
    
}

module.exports = generateFlowers;