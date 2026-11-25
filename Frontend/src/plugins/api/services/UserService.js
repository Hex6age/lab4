import { API_BASE_URL, fetchData } from "../apiConfig.js";

class UserService {
  async getCurrentUser(recordId) {
    return fetchData(`${API_BASE_URL}/users/${recordId}`);
  }
}

const service = new UserService();
export default service;