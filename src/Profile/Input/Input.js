import "./Input.css";
import { useDispatch } from 'react-redux'

export function Input({ data, field, id }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: {id, field, value}
    });
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
