import axios from "axios";

export const loginAPI = async (user, pass) => {
  let respon = null, isError = false;

  const options = {
    method: 'POST',
    url: `http://localhost:8000/login`,
    params: { 
      username : user,
      password : pass,
     }, 
  };
  
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    console.log(error);
  }

  return {respon, isError}

}

export const registerAPI = async (user, pass) => {
  let respon = null, isError = false;

  const options = {
    method: 'POST',
    url: `http://localhost:8000/register`,
    params: { 
      username : user,
      password : pass,
     }, 
  };
  
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    console.log(error);
  }

  return {respon, isError}
}