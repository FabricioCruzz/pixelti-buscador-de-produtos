import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ListOne from "./ListOne";
import "./style.css";

const Gateways = () => {
  const [input, setInput] = useState("");
  const [gateways, setGateways] = useState([]);
  const [gateway, setGateway] = useState({});

  const logoPixel = "/public/logopixelti.png";

  const fetchGateways = async () => {
    await fetch("./gtws.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setGateways(res.gateways));
  };

  const findGatewayById = (id) => {
    const gtw = gateways.find((gtw) => gtw._id === id);
    if (gtw == null) {
      alert("Este id não existe!");
      setInput("");
      return setGateway({});
    }
    setGateway(gtw);
  };

  useEffect(() => {
    fetchGateways();
  }, []);

  const handleSearch = () => {
    if (input === "") {
      alert("Preencha com um id!");
      return;
    }
    findGatewayById(input);
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Produtos</h1>

      <img
        src={logoPixel}
        alt="Logo da Pixel TI"
        className="logo"
      />

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o id do produto..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="buttonSearch"
          onClick={handleSearch}
        >
          <FiSearch
            size={25}
            color="#B7D440"
          />
        </button>
      </div>

      {Object.keys(gateway).length > 0 && <ListOne gateway={gateway} />}
    </div>
  );
};

export default Gateways;
