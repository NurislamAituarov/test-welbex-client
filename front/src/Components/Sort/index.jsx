import './Sort.scss';
import cn from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Down } from '../Svg/Down';
import { useOutsideAlerter } from '../../Hook/useOtsideAlert';
import { Button } from '../Button';
import { addFilterItems } from '../../Redux/action';
import { Filter } from '../Svg/Filter';

const arrList = ['Название', 'Количество', 'Растояние'];

export function Sort() {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);
  const [active_list, setActiveList] = useState('Название');
  const [value, setValue] = useState({ str: '', amount: '', distance: '' });
  const [condition, setCondition] = useState({
    amount: '',
    distance: '',
  });
  const dispatch = useDispatch();

  function onSubmit(e) {
    onClickToggle(e);
    let item = {};
    if (active_list === 'Название') {
      item = {};
      item.column = active_list;
      item.value = value.str;
    }
    if (active_list === 'Количество') {
      item = {};
      item.column = active_list;
      item.num = value.amount;
      item.condition = condition.amount;
    }
    if (active_list === 'Растояние') {
      item = {};
      item.column = active_list;
      item.num = value.distance;
      item.condition = condition.distance;
    }
    dispatch(addFilterItems(item));
  }
  function onClear(e) {
    setValue({ str: '', amount: '', distance: '' });
    setCondition({ amount: '', distance: '' });
    dispatch(addFilterItems(''));
  }
  function onClickToggle(e) {
    e.stopPropagation();
    setIsShow(!isShow);
  }
  return (
    <div ref={ref} onClick={setIsShow} className="sort flex">
      <div tabIndex="0" className={cn('flex filter', { 'active-filter': isShow })}>
        <Filter isShow={isShow} onClickToggle={onClickToggle} />
      </div>
      <div
        className={cn('drop-down fade', {
          'drop-down__show': isShow,
        })}>
        <div style={{ justifyContent: 'space-between' }} className="flex">
          {arrList.map((el, i) => {
            return (
              <DropList
                key={i}
                title={el}
                i={i}
                active_list={active_list}
                setActiveList={setActiveList}
              />
            );
          })}
        </div>

        {active_list === 'Название' && (
          <div className="search-str">
            <input
              type="text"
              value={value.str}
              onChange={(e) => setValue((value) => ({ ...value, str: e.target.value }))}
            />
          </div>
        )}

        {active_list === 'Количество' && (
          <div className="condition flex">
            <input
              min={0}
              type="number"
              value={value.amount}
              onChange={(e) => setValue((value) => ({ ...value, amount: e.target.value }))}
            />
            <Button
              title="больше"
              name="amount"
              setCondition={setCondition}
              condition={condition.amount}
            />
            <Button
              title="меньше"
              name="amount"
              setCondition={setCondition}
              condition={condition.amount}
            />
          </div>
        )}

        {active_list === 'Растояние' && (
          <div className="condition flex">
            <input
              min={0}
              type="number"
              value={value.distance}
              onChange={(e) => setValue((value) => ({ ...value, distance: e.target.value }))}
            />
            <Button
              title="больше"
              name="condition"
              setCondition={setCondition}
              condition={condition.distance}
            />
            <Button
              title="меньше"
              name="condition"
              setCondition={setCondition}
              condition={condition.distance}
            />
          </div>
        )}

        <div className="flex" style={{ justifyContent: 'space-between' }}>
          <button onClick={onSubmit} className="btn btn-submit">
            Применить
          </button>
          <button onClick={onClear} className="btn btn-clear">
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
}

function DropList({ title, active_list, i, setActiveList }) {
  return (
    <>
      <p
        onClick={() => setActiveList(title)}
        className={cn('drop-list', { 'active-list': active_list === title })}>
        {title}
      </p>
    </>
  );
}
