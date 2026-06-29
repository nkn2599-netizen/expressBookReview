const axios = require("axios");

const getAllBooks = async () => {
    const res = await axios.get("http://localhost:3000/books");
    console.log(res.data);
};
