import "./listOne.css";

const ListOne = (props) => {
  const { gateway } = props;
  console.log(props);
  return (
    <main className="main">
      <h2>Nome: {gateway.name}</h2>

      <div
        className="devices"
        key={gateway._id}
      >
        Dispositivos <br />
        {gateway.devices.map((d) => {
          return <span key={d._device}>Modelo: {d.modelId}</span>;
        })}
      </div>
    </main>
  );
};
export default ListOne;
