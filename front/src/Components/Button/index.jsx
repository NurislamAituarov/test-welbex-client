import './Button.scss';
import cn from 'classnames';
import { useState } from 'react';

export function Button({ title, name, setCondition, condition }) {
  function onSelected(title) {
    if (name === 'amount') {
      setCondition((condition) => ({ ...condition, amount: title }));
    } else {
      setCondition((condition) => ({ ...condition, distance: title }));
    }
  }

  return (
    <button
      onClick={() => onSelected(title)}
      className={cn('btn-column', { 'btn-active': title === condition })}>
      {title}
    </button>
  );
}
