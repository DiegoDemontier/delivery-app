import React, { useState, useMemo } from 'react';
import Input from './Input';
import './AdminForm.css';

function AdminForm() {
  const roleOptions = ['Vendedor', 'Administrador', 'Cliente'];
  const [adminFormData, setAdminFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: roleOptions[0],
  });

  const handleChangeaAdminForm = ({ target: { value, name } }) => {
    setAdminFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const NAME_LENGHT = 12;
  const nameValidation = (name) => name.length >= NAME_LENGHT;

  const emailValidation = (email) => {
    const regexValidation = /\S+@\S+\.\S+/;
    return regexValidation.test(email);
  };

  const PASSWORD_LENGHT = 6;
  const passwordValidation = (password) => password.length >= PASSWORD_LENGHT;

  const buttonAdmRegisterStatus = useMemo(() => !nameValidation(adminFormData.name)
    || !emailValidation(adminFormData.email)
    || !passwordValidation(adminFormData.password), [adminFormData]);

  return (
    <form className="admin-details-form">
      <div className="admin-form-input">
        <Input
          labelName="Name"
          inputPlaceholder="Nome e Sobrenome"
          name="name"
          type="text"
          labelClass="details-label"
          inputClass="input-field"
          value={ adminFormData.name }
          datatestid="admin_manage__input-name"
          handleChange={ handleChangeaAdminForm }
        />
      </div>
      <div className="admin-form-input">
        <Input
          labelName="Email"
          inputPlaceholder="seu-email@site.com.br"
          name="email"
          type="text"
          labelClass="details-label"
          inputClass="input-field"
          value={ adminFormData.email }
          datatestid="admin_manage__input-email"
          handleChange={ handleChangeaAdminForm }
        />
      </div>

      <div className="admin-form-input">
        <Input
          labelName="Senha"
          inputPlaceholder="************"
          name="password"
          type="password"
          labelClass="details-label"
          inputClass="input-field"
          value={ adminFormData.password }
          datatestid="admin_manage__input-password"
          handleChange={ handleChangeaAdminForm }
        />
      </div>
      <div className="admin-form-input">
        <label htmlFor="type" className="admin-details-label">
          Tipo
          <br />
          <select
            name="role"
            id="role"
            className="input-field w-95"
            data-testid="admin_manage__select-role"
            onChange={ handleChangeaAdminForm }
            defaultValue={ roleOptions[0] }
          >
            {
              roleOptions.map((item, index) => (
                <option
                  key={ index }
                  value={ item }
                >
                  { item }
                </option>
              ))
            }
          </select>
        </label>
      </div>
      <div className="admin-form-input button-container">
        <button
          type="button"
          className="admin-form-button"
          data-testid="admin_manage__button-register"
          disabled={ buttonAdmRegisterStatus }
        >
          CADASTRAR
        </button>
      </div>
    </form>
  );
}

export default AdminForm;
