const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // accept: 'application',
  },
};
export const createContact = async post => {
  options.body = JSON.stringify(post);
  try {
    const response = await fetch(
      'https:portfolio-js.b.goit.study/api/requests',
      options
    );
    if (!response.ok) throw new Error(response.status);
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
