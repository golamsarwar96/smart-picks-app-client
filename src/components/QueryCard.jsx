const QueryCard = ({ query }) => {
  const { product_name } = query || {};
  return (
    <div>
      <h1>{product_name}</h1>
    </div>
  );
};

export default QueryCard;
