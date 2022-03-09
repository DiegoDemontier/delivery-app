import React, { useContext, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import AdminForm from '../components/AdminForm';
import './AdminManage.css';
import TableRowAdmin from '../components/TableRowAdmin';

function AdminManage() {
  const { infoUser, requestAllUsers, requestdeleteUser } = useContext(InfoContext);
  const [userList, setUserlist] = useState([]);

  const handleClickDelete = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const setUser = JSON.parse(localStorage.getItem('user'));
    await requestdeleteUser(setUser.token, id);

    setUserlist(await requestAllUsers(user.token));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = async () => {
      setUserlist(await requestAllUsers(user.token));
    };
    response();
  }, [requestAllUsers]);

  const titles = ['item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        suffix="orders"
        ordersClasse="green"
        display="no-display"
        text="GERENCIAR USUÁRIOS"
      />
      <h4 className="form-title">Cadastrar novo usuário</h4>
      <div className="form-container">
        <AdminForm
          setUserlist={ setUserlist }
        />
      </div>
      <h4 className="form-title">Lista de usuários</h4>
      <div className="form-container">
        <table className="admin-table">
          <thead>
            <tr>
              {
                titles.map((item, index) => <th key={ index }>{ item }</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              userList.map((user, index) => (
                <TableRowAdmin
                  key={ user.id }
                  user={ user }
                  handleClickDelete={ handleClickDelete }
                  index={ index }
                />))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminManage;
