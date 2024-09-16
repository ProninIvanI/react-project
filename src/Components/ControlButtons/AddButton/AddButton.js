import './AddButton.css'
import {Button} from '../Button/Button';
import addImages from "../../../Images/add.svg"

export function AddButton(props) {
  return(
    <Button handleClick={props.handleClickAddMan}>
      <img className="images" alt='' src={addImages}/>
    </Button>
  );
}