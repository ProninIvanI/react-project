import './Button.css'

export default function Button({children, className, handleClick}) {
  return(
    <button className={`buttonCRUD ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}