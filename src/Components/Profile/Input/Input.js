import { updatedProfileAction } from "../../../Store/Reducers/WorkWithProfiles";
import "./Input.css";
import { useDispatch } from "react-redux";

export function Input({ data, field, id, placeholderData, titleData }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(updatedProfileAction(id, field, value));
  };

  return (
    <input
      className="fieldForWrite"
      type="text"
      value={data}
      onChange={handleChange}
      placeholder={placeholderData}
      title={titleData}
    />
  );
}
