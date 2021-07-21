import NavBar from "./components/NavBar";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const onSearch = (query) => history.replace(`/items?search=${query}`);
  return <NavBar onSearch={onSearch} />;
};

export default Header;
