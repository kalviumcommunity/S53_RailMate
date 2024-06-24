import Cookies from 'js-cookie';


export const setUserCookies = (username, useruid) => {
  Cookies.set('RailmateUsername', username, { expires: 1 }); 
  Cookies.set('RailmateUseruid', useruid, { expires: 1 }); 
};


export const deleteUserCookies = () => {
  Cookies.remove('RailmateUsername');
  Cookies.remove('RailmateUseruid');
};
