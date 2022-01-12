import { login_fetch, signin_fetch } from './fetches'

export const login_handler = async (e, username, password) => {
    e.preventDefault();
    const ret_val = await login_fetch(username)
    if (ret_val.usr.username == username && ret_val.user.password == password) {
      console.log(ret_val);
    }
}

export const signin_handler = async (e, username, password) => {
    e.preventDefault();
    const ret_val = await signin_fetch(username)
    if (ret_val.usr.username == username && ret_val.user.password == password) {
      console.log(ret_val);
    }
}