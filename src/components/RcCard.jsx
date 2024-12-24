const RcCard = ({ recommendation, idx }) => {
  const { rc_product_name, rc_product_photo, recommendation_title, rc_name } =
    recommendation || {};
  return (
    <div>
      {/* <h1 className="text-5xl text-secondaryColor">{rc_product_name}</h1> */}
      <div className="overflow-x-auto text-secondaryColor">
        <table className="table">
          {/* head */}

          <tbody className="">
            {/* row 1 */}
            <tr>
              <th>{idx + 1}</th>
              <td>
                <img
                  className="w-28 h-24 object-cover"
                  src={rc_product_photo}
                />
              </td>
              <td className="text-center">{recommendation_title}</td>
              <td className="text-right">{rc_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RcCard;
