import { createContext,  useState } from 'react';


const UserContext = createContext();

function UserProvider ({ children }) {
  const [user, setUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  });

  function logOut () {
    setUser(null);
    localStorage.removeItem('user');
  }

  function logIn (user, token) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   setUser(user);
  // }, []);

  const contextValues = {
    user,
    logOut,
    logIn
  };

  return (
    <UserContext.Provider value={contextValues}>
      { children }
    </UserContext.Provider>
  );
}


export default UserProvider;
export { UserContext };
