const URL = "https://jsonplaceholder.typicode.com/todos/";

const getData = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getData();