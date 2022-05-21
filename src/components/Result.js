const Result = ({ total, deadline, quantity }) => {
  return (
    <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>La cantidad solicitada es: {quantity}€</p>
      <p>A pagar en: {deadline} meses</p>
      <p>Su pago mensual es de: {(total / deadline).toFixed(2)}€</p>
      <p>Total a pagar: {total.toFixed(2)}€</p>
    </div>
  );
};

export default Result;
