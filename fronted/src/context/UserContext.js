// context/UserContext.js
import { createContext } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
  loading: true, // initial loading state
  setLoading: () => {},
});

export default UserContext;
