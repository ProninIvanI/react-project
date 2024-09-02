import Button from "../Button/Button";
import deleteImages from "../../images/delete.svg";
import "./DeleteButton.css";
import { useContext } from "react";
import { ProfileContext } from "../../ProfileContextProvider";

export default function DeleteButton({ id }) {
  const { handleClickDeleteMen } = useContext(ProfileContext);
  const handleClick = () => {
    handleClickDeleteMen(id);
  };

  return (
    <Button className="deleteButton" handleClick={handleClick}>
      <img alt="" src={deleteImages} className="deleteImages" />
    </Button>
  );
}
