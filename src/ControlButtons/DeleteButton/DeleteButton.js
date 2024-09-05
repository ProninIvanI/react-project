import Button from "../Button/Button";
import deleteImages from "../../images/delete.svg";
import "./DeleteButton.css";
import { useDispatch } from "react-redux";

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: "HANDLE_CLICK_DELETE_MEN",
      payload: { id },
    });
  };

  return (
    <Button className="deleteButton" handleClick={handleClick}>
      <img alt="" src={deleteImages} className="deleteImages" />
    </Button>
  );
}
