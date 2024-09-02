import { ProfileContext } from "../../ProfileContextProvider";
import "./Input.css";
import { useContext } from "react";

export function Input({ data, field, id }) {
  const { updateProfile } = useContext(ProfileContext);

  const handleChange = (event) => {
    updateProfile(id, field, event.target.value);
  };

  return (
    <input
      className="fieldForWrite"
      type="text"
      value={data}
      onChange={handleChange}
    />
  );
}
