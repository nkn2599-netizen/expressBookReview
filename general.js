const axios = require("axios");

const BASE_URL = "http://localhost:3000";

// 1. Get all books
const getAllBooks = async () => {
    const res = await axios.get(`${BASE_URL}/books`);
    console.log("All Books:", res.data);
};

// 2. Get book by ISBN
const getBookByISBN = async (isbn) => {
    const res = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    console.log("Book by ISBN:", res.data);
};

// 3. Get books by author
const getBooksByAuthor = async (author) => {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log("Books by Author:", res.data);
};

// 4. Get books by title
const getBooksByTitle = async (title) => {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log("Books by Title:", res.data);
};

// 5. Get book reviews
const getBookReviews = async (isbn) => {
    const res = await axios.get(`${BASE_URL}/books/review/${isbn}`);
    console.log("Reviews:", res.data);
};

// 6. Register user
const registerUser = async () => {
    const res = await axios.post(`${BASE_URL}/register`, {
        username: "testuser",
        password: "testpass"
    });
    console.log("Register:", res.data);
};

// 7. Login user
const loginUser = async () => {
    const res = await axios.post(`${BASE_URL}/login`, {
        username: "testuser",
        password: "testpass"
    });
    console.log("Login:", res.data);
    return res.data.token;
};

// 8. Add / modify review
const addReview = async (isbn, token) => {
    const res = await axios.post(
        `${BASE_URL}/books/review/${isbn}`,
        { review: "Amazing book!" },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    console.log("Add Review:", res.data);
};

// 9. Delete review
const deleteReview = async (isbn, token) => {
    const res = await axios.delete(
        `${BASE_URL}/books/review/${isbn}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    console.log("Delete Review:", res.data);
};

// Run all tests (optional)
const run = async () => {
    await getAllBooks();
    await getBookByISBN("1");
    await getBooksByAuthor("Author Name");
    await getBooksByTitle("Book Title");

    await registerUser();
    const token = await loginUser();

    await addReview("1", token);
    await deleteReview("1", token);
};

run();
