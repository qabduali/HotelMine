import axios from 'axios';
import authHeader from './auth-header';
import qs, {stringify} from 'qs';

const API_URL = 'http://localhost:8080/api/test/';
const GENERAL_URL = 'http://localhost:8080/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAllHotels() {
    return axios.get(API_URL + 'all/hotels');
  }

  getHotelById(id) {
    return axios.get(API_URL + 'all/hotels/' + id);
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getProfileBoard(id) {
    return axios.get(GENERAL_URL + 'auth/user/' + id, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod/booking', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin/employees', { headers: authHeader() });
  }

  postAdminBoard(data){
    axios.post(API_URL + 'admin/employees', {
      employee_name: data.employee_name,
      employee_surname: data.employee_surname,
      hotel_id: data.hotel_id,
      hours: data.hours,
      position: data.position,
      salary:data.salary
    }, { headers: authHeader() })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  //edit
  putAdminBoard(id, data){
    const options = {
      method: "PUT",
      headers: {headers: authHeader()},
      data: qs.stringify(data),
      url: `${API_URL}admin/employees/${id}`
    }
    return axios(options).catch(function (error){
      console.log(error)
    })
  }

  deleteAdminBoard(id){
    return axios.delete(API_URL + 'admin/employees/' + id, {
      headers: authHeader(),
    })
  }
}

export default new UserService();
