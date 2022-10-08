fetch('https://fakestoreapi.com/carts')
  .then(responce=>
    responce.json())
  .then(data=>
    console.log(data))
  