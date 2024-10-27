export const getUserData = () => {
    const userInfo = localStorage.getItem("loggedUser");
    return userInfo ? JSON.parse(userInfo) : null; // Return user data or null if not found
};

export const storeUserData = (userData) => {
    localStorage.setItem("loggedUser", JSON.stringify(userData));
};