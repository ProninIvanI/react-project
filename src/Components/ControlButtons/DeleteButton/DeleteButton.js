import { Button } from "../Button/Button";
import deleteImages from "../../../Images/delete.svg";
import "./DeleteButton.css";
import { useState } from "react";
import { FormConfirmDelete } from "../../FormConfirm/FormConfirmDelete/FormConfirmDelete";

export function DeleteButton({id}) {
  const [isConfirm, setIsConfirm] = useState(true);

  const handleClick = () => {
    setIsConfirm(!isConfirm);
  };

  return (
    <div>
      {isConfirm ? (
        <Button className="deleteButton" handleClick={handleClick}>
          <img alt="" src={deleteImages} className="deleteImages" />
        </Button>
      ) : (
        <FormConfirmDelete id={id} isConfirm={isConfirm} setIsConfirm={setIsConfirm}/>
      )}
    </div>
  );
}
