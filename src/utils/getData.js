import React from 'react';
import axios from 'axios';

const getData = async (email2, password) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5500/api/tasks/${email2}`
    );
    const tasks = data.task.hash;
    // console.log(data);
    // console.log(tasks);
    if (tasks) {
      if (tasks == password) {
        console.log('Success');
      } else {
        console.log('Wrond ID/Pass');
      }
    } else {
      console.log('Wrond ID/Pass');
    }
  } catch (err) {
    console.log(err);
  }
};

export default getData;