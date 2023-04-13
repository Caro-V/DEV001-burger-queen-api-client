
const Pedido = ({ category, name, price }) => {
  return (
    <>
    <p>{category}</p>
    <p>{name}</p>
    <p>${price}</p>
    </>
  ) ;
};

export default Pedido