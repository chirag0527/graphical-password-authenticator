import axios from 'axios';
import React from 'react';

const postData = async (email, hash) => {
  try {
    console.log(typeof hash);
    console.log(hash);
    await axios.post('http://localhost:5500/api/tasks', { email, hash });
  } catch (err) {
    console.log(err);
  }
};

export default postData;