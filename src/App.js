import React, { Fragment, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Message from "./components/Message";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  let component;

  if (loading) {
    component = <Spinner />;
  } else if (total === 0) {
    component = <Message />;
  } else {
    component = (
      <Result total={total} deadline={deadline} quantity={quantity} />
    );
  }

  return (
    <Fragment>
      <Header title="Cotizador de Préstamos" />

      <div className="container">
        <Form
          quantity={quantity}
          setQuantity={setQuantity}
          deadline={deadline}
          setDeadline={setDeadline}
          setTotal={setTotal}
          setLoading={setLoading}
        />
        <div className="mensajes">{component}</div>
      </div>
    </Fragment>
  );
}

export default App;
