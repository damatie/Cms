import cookie from 'js-cookie';

export const Host= () =>{
const BaseUrl ='https://dev-api.kusnap.com/api';
return BaseUrl;
}

export const myCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      secure:true,
      path: '/'
    });
  }
};

export const deleteCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

 export const checkIfLoggedIn = ()=>{
  const isLoggedin = getCookie('Bearer' )
  return isLoggedin
}



 export const AuthToken = () =>{
 const Token = getCookie('Bearer')
	// console.log(Token)
  return Token;
 }


