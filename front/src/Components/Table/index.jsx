import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { TableItems } from './Table-items';
import './Table.scss';
import { Arrow } from '../Svg/Arrow';
import { getTableItems } from '../../Api/client';
import { addListItems } from '../../Redux/action';

let firstIndex = 0;
let lastIndex = 8;
let notesOnPage = 8;

export function Table() {
  const arrListItems = useSelector((state) => state.reducer.listItems);
  const filter = useSelector((state) => state.reducer.filterItems);
  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);
  const refPages = useRef([]);
  const dispatch = useDispatch();
  let allPages = Math.floor(listItems.length / 8);

  useEffect(() => {
    getTableItems().then((items) => {
      setListItems(items.data);
      dispatch(addListItems(items.data));
    });
  }, []);

  useEffect(() => {
    if (filter.column === 'Название') {
      setListItems([
        ...arrListItems.filter((el) => {
          if (el.name.toLowerCase().includes(filter.value.toLowerCase())) {
            return el;
          }
        }),
      ]);
    }
    if (filter.column === 'Количество') {
      setListItems([
        ...arrListItems.filter((el) => {
          if (!filter.condition && filter.num == el.amount) {
            return el;
          }
          if (filter.num === '') {
            return el;
          }

          if (filter.condition === 'больше' && +el.amount > filter.num) {
            return el;
          }
          if (filter.condition === 'меньше' && +el.amount < filter.num) {
            return el;
          }
        }),
      ]);
    }
    if (filter.column === 'Растояние') {
      setListItems([
        ...arrListItems.filter((el) => {
          if (!filter.condition && filter.num == el.distance) {
            return el;
          }
          if (filter.num === '') {
            return el;
          }

          if (filter.condition === 'больше' && +el.distance > filter.num) {
            return el;
          }
          if (filter.condition === 'меньше' && +el.distance < filter.num) {
            return el;
          }
        }),
      ]);
    }
    if (filter === '') {
      setListItems(arrListItems);
    }
  }, [filter]);

  function selectedPage(page) {
    setPage(page);
    firstIndex = (page - 1) * notesOnPage;
    lastIndex = firstIndex + notesOnPage;
    allPages > page &&
      refPages.current[page].scrollIntoView({
        block: 'start',
        inline: 'end',
        behavior: 'smooth',
      });
  }
  function switchPage(direction) {
    if (direction === 'right') {
      if (allPages > page) {
        setPage(page + 1);
        refPages.current[page].scrollIntoView({
          block: 'start',
          inline: 'end',
          behavior: 'smooth',
        });
        firstIndex = firstIndex + 4;
        lastIndex = lastIndex + 4;
      }
    } else {
      if (page > 1) {
        setPage(page - 1);
        refPages.current[page].scrollIntoView({
          block: 'start',
          inline: 'end',
          behavior: 'smooth',
        });
        firstIndex = firstIndex - 4;
        lastIndex = lastIndex - 4;
      }
    }
  }

  return (
    <>
      <div className="table">
        <div className="table__column">
          <p>Дата</p>
        </div>
        <div className="table__column">
          <p>Название</p>
        </div>
        <div className="table__column">
          <p>Количество</p>
        </div>
        <div className="table__column">
          <p>Расстояние</p>
        </div>
      </div>

      {listItems.slice(firstIndex, lastIndex).map((el, i) => {
        return <TableItems key={i} el={el} />;
      })}

      <div className="pagination__container flex">
        {allPages > 0 && (
          <div className={cn('arrow-right flex', { arrow__disabled: page === 1 })}>
            <Arrow direction="left" fn={switchPage} />
          </div>
        )}
        <div className="pagination__wrapper flex">
          <div className="pagination flex">
            {Array(allPages)
              .fill()
              .map((el, i) => {
                return (
                  <p
                    ref={(el) => (refPages.current[i] = el)}
                    onClick={() => selectedPage(i + 1)}
                    className={cn('flex', { 'active-page': i + 1 === +page })}
                    key={i}>
                    {i + 1}
                  </p>
                );
              })}
          </div>
        </div>

        {allPages > 5 && (
          <div className={cn('arrow-right flex', { arrow__disabled: allPages === page })}>
            <Arrow direction="right" fn={switchPage} />
          </div>
        )}
      </div>
    </>
  );
}
