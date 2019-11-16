import React from 'react'

const FlowerList = ({flowers}) =>
  flowers.map(flower =>           
  <div>
    <h3>{flowers.strainName}</h3>
    <p>{flowers.strainType}</p>
    <p>{flowers.priceTier}</p>
    <p>{flowers.inventoryQuantity} ea</p>
  </div>
  )

  // const FlowerList = ({flowers}) =>
  // flowers.map(flower => <li key={flower}>{flower}</li>)

export default FlowerList
