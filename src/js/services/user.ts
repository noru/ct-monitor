import axios from 'axios'

export const URL = {
  list: '/cpmboard/admin/getUserList.do',
  create: '/cpmboard/admin/saveNewUser.do',
  update: '/cpmboard/admin/updateUser.do',
  delete: '/cpmboard/admin/deleteUser.do',
  roles: '/cpmboard/admin/getRoleList.do',
}

class UserService {

  list() {
    return axios.get(URL.list)
      .then(resp => resp.data)
  }

  getRoles() {
    return axios.get(URL.roles)
      .then(resp => resp.data)
  }

  create(user: any) {
    return axios.post(URL.create, user)
  }

  update(user: any) {
    return axios.post(URL.update, user)
  }

  delete(userId: string) {
    return axios.delete(URL.delete, { params: { userId }})
  }
}

export default new UserService