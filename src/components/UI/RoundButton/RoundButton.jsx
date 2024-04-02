import './RoundButton.css';

export const RoundButton = ({ icon, onClick }) => {
  return (
    <button className='add-substract-button' onClick={onClick}>
      {icon}
    </button>
  );
};
