 import axios from 'axios';

 const instance= axios.create({
     baseURL: "https://tinder-backend26.herokuapp.com/",
 });
 export default instance;
 