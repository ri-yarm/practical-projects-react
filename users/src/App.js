import React, { useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [succes, setSucces] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((resp) => resp.json())
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  /** Получаем значение инпута  */
  const onChangeSearchValue = (e) => setSearchValue(e.target.value);

  /** Добавляем или удаляем приглаёшённых пользователей  */
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvite = () => {
    setSucces(true)
  }

  return (
    <div className="App">
      {succes ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvite = {onClickSendInvite}
        />
      )}
    </div>
  );
}

export default App;
