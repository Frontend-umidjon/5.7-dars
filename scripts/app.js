const BASE_URL = 'http://dummyjson.com';

async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  

}

fetchData('products');

