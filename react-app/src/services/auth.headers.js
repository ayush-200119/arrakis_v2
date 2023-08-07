export default function authHeader() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    //console.log(user)
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }
