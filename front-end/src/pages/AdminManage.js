import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import AdminForm from '../components/AdminForm';
import './AdminManage.css';
import TableRowAdmin from '../components/TableRowAdmin';

function AdminManage() {
  const { infoUser } = useContext(InfoContext);

  const titles = ['item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];
  const arrayItems = ['1', '2', '3', '4'];

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
        <AdminForm />
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
              arrayItems.map((item, index) => (
                <TableRowAdmin
                  key={ item }
                  index={ index }
                />))
            }
            {/* <TableRowAdmin /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminManage;
