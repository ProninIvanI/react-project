import './AddButton.css'
import Button from '../Button/Button';
import addImages from "../../images/add.svg"

export default function AddButton(props) {
  return(
    <Button handleClick={props.handleClickAddMen}>
      <img className="images" alt='' src={addImages}/>
    </Button>
  );
}