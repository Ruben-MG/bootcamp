import { useEffect, useState } from "react";
import "./App.css";
import { users } from "./users";

const loginError = "Las credenciales no son válidas. Vuelve a intentarlo.";

const normalize = (value) => value.trim().toLowerCase();

const playerIndex = users.reduce((acc, player) => {
  acc[normalize(player.username)] = player;
  return acc;
}, {});

const getStoredUser = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem("activeUser");

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.warn("No se ha podido leer el usuario guardado", error);
    window.localStorage.removeItem("activeUser");
    return null;
  }
};

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeUser, setActiveUser] = useState(() => getStoredUser());
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (activeUser) {
      window.localStorage.setItem("activeUser", JSON.stringify(activeUser));
    } else {
      window.localStorage.removeItem("activeUser");
    }
  }, [activeUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const key = normalize(username);
    const player = playerIndex[key];

    if (!player || player.password !== password) {
      setErrorMessage(loginError);
      setPassword("");
      return;
    }

    const { password: _password, ...safePlayer } = player;
    setActiveUser(safePlayer);
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  const handleLogout = () => {
    setActiveUser(null);
  };

  if (activeUser) {
    return <Dashboard user={activeUser} onLogout={handleLogout} />;
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form__title">Starfinder HQ</h1>
        <p className="login-form__subtitle">Acceso exclusivo para la tripulación</p>
        <label className="login-form__label" htmlFor="username">
          Usuario
        </label>
        <input
          autoComplete="username"
          className="login-form__input"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Nombre del cadete"
          required
          type="text"
          value={username}
        />
        <label className="login-form__label" htmlFor="password">
          Contraseña
        </label>
        <input
          autoComplete="current-password"
          className="login-form__input"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Clave de acceso"
          required
          type="password"
          value={password}
        />
        {errorMessage && <p className="login-form__error">{errorMessage}</p>}
        <button className="login-form__button" type="submit">
          Entrar
        </button>
        <p className="login-form__hint">
          Habla con la capitana para recibir tu clave personal.
        </p>
      </form>
    </div>
  );
};

const Dashboard = ({ user, onLogout }) => {
  const hasCharacters = user.characters && user.characters.length > 0;

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Starfinder HQ</h1>
          <p className="dashboard__subtitle">
            Bienvenido, {user.displayName || user.username}
          </p>
        </div>
        <button className="dashboard__logout" onClick={onLogout} type="button">
          Cerrar sesión
        </button>
      </header>
      <main className="dashboard__content">
        <section className="dashboard__section">
          <h2>Personajes</h2>
          {hasCharacters ? (
            <ul className="character-list">
              {user.characters.map((character) => (
                <li className="character-list__item" key={character.name}>
                  <span className="character-list__name">{character.name}</span>
                  <span className="character-list__details">
                    {character.role} &middot; Nivel {character.level}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="dashboard__empty">
              Aún no hay personajes asignados a este perfil.
            </p>
          )}
        </section>
        {user.notes && (
          <section className="dashboard__section">
            <h2>Notas de misión</h2>
            <p className="dashboard__notes">{user.notes}</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
