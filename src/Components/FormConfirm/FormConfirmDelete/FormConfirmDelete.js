import { Button } from '../../ControlButtons/Button/Button';
import './FormConfirmDelete.css'
import crossMark from '../../../Images/crossMark.svg'
import checkMark from '../../../Images/checkMark.svg'
import { useDispatch } from "react-redux";
import { deleteProfileAction } from "../../../Store/Reducers/WorkWithProfiles";

export function FormConfirmDelete( { id, isConfirm, setIsConfirm} ) {
  const dispatch = useDispatch();
  const handleClickCheck = () => {
    dispatch(deleteProfileAction(id));
    setIsConfirm(!isConfirm)
  };

  const handleClickCross = () => {
    setIsConfirm(!isConfirm)
  };

  return (
    <div className='buttonConfirmArea'>
      <Button className='buttonConfirm' handleClick={handleClickCheck}>
        <img alt='' src={checkMark} className='imageConfirm'/>
      </Button>
      <Button className='buttonConfirm' handleClick={handleClickCross}>
        <img alt='' src={crossMark} className='imageConfirm'/>
      </Button>
    </div>
  );
}