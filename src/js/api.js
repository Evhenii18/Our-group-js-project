// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     accept: 'application/json',
//   },
// };
// export const createContact = async post => {
//   options.body = JSON.stringify(post);
//   try {
//     const response = await fetch(
//       'https:portfolio-js.b.goit.study/api/requests',
//       options
//     );
//     if (!response.ok) throw new Error(response.status);
//     return response.json();
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
import axios from 'axios';
export const createContact = async (email, comment) => {
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        email,
        comment,
      }
    );
    if (!response.status === 201) throw new Error(response.status);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
