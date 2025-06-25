import { IS_DEVELOPMENT } from "../config.js";


const prod = {
    getAll: "https://fakestoreapi.com/products",
};

const dev = {
    getAll:
        "https://fakestoreapi.com/products",
};

export default IS_DEVELOPMENT ? dev : prod;
