function createCookie(name, uid) {
    const expires = new Date();
    expires.setTime(expires.getTime() + 3 * 60 * 60 * 1000); 
    document.cookie = `uid=${uid};  expires=${expires.toUTCString()}; path=/`;
    document.cookie = `name=${name}; expires=${expires.toUTCString()}; path=/`;  
}
function deleteCookie(){
    console.log("Cookiee Deleted");
    document.cookie = `uid="";  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    document.cookie = `name="";  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export {createCookie,deleteCookie};

