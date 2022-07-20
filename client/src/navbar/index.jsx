import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { DefaultContext } from "../Context";
import { useContext } from "react";
// jshint ignore:start

const Navbar = () => {
  const { isAuth } = useContext(DefaultContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <a onClick={() => navigate("/")} className="logo">
        Proton
      </a>
      <div className="links1">
        <a onClick={() => navigate("/catalog")} className="a1">
          Шаблоны
        </a>
        <a onClick={() => navigate("/catalog")} className="a1">
          Категории
        </a>
        <a onClick={() => navigate("/comm")} className="a1">
          Цены
        </a>
      </div>
      {!isAuth ? (
        <div className="links2">
          <a className="login" onClick={() => navigate("/login")}>
            Войти
          </a>
          <a className="button" onClick={() => navigate("/registration")}>
            Регистрация
          </a>
        </div>
      ) : (
        <div className="links2">
          <a className="login" href="/[profile]">
            Профиль
          </a>
        </div>
      )}
    </div>
  );
};
// jshint ignore:end

export default Navbar;
