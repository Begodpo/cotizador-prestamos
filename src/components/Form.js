import React, { Fragment, useState } from "react";
import { calculateTotal } from "../helpers";

const Form = (props) => {
  const { quantity, setQuantity, deadline, setDeadline, setTotal, setLoading } =
    props;
  const [error, setError] = useState(false);

  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleChangeDeadline = (e) => {
    setDeadline(parseInt(e.target.value));
  };

  const handleClickBtn = (e) => {
    e.preventDefault();
    if (quantity === 0 || deadline === "") {
      setError(true);
      return;
    }
    setError(false);

    setLoading(true);
    setTimeout(() => {
      const total = calculateTotal(quantity, deadline);
      setTotal(total);
      setLoading(false);
    }, 3000);
  };

  return (
    <Fragment>
      <form onSubmit={handleClickBtn}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={handleChangeQuantity}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={handleChangeDeadline}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Form;
