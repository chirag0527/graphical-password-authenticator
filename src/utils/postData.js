import axios from "axios";


export const sendPostRequest = async (name, email, password) => {
  try {
    const data = { name, email, password };
    const response = await axios.post('', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}