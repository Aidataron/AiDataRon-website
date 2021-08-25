import axios from "axios";
// let url = "http://localhost:3001";
let url = "https://aidataronbackend.herokuapp.com";

const submitMessage = async (data) => {
  console.log(data);
  let response;
  response = await axios.post(`${url}/api/message`, data);

  console.log(response);
  return response;
};

export { submitMessage };
