import { searchProducts } from "./fetchHelper.js";

async function testFetch() {
    const result = await searchProducts();
    console.log(result);
}

testFetch();








