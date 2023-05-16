import { ReactComponent as Plus } from '../assets/plus.svg';

export const Button = ({ addedPizza, onClickAddPizza }) => {
  return (
    <button
      className="btn item__btn btn--outline btn-reset"
      aria-label="add pizza"
      onClick={onClickAddPizza}
    >
      <Plus className="btn__img" />

      <span className="btn__title">Add pizza</span>
      {addedPizza > 0 ? <span className="btn__quantity added">{addedPizza}</span> : ''}
    </button>
  );
};
