const axios = require('axios');

const fetchTodos = async (id) => {
  const results = await axios(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return results.data;
};

module.exports = fetchTodos;
