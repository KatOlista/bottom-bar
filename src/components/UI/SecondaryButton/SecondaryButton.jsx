import './SecondaryButton.css';

export const SecondaryButton = ({ content, onClick }) => {
  return (
    <button className='secondary-button' onClick={onClick}>
      {content}
    </button>
  );
};
