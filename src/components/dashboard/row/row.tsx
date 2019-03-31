import React, { useState } from 'react';
import uuidv1 from 'uuid';
import Card, { CardProps } from '../../card/card';
import Dropdown, { ListItem } from '../../dropdown/dropdown';
import Icon from '../../icon/icon';

interface RowProps {
  id: string;
  onClick?: () => void;
}

const Row: React.FunctionComponent<RowProps> = (
  props: RowProps,
): JSX.Element => {
  // All Cards displayed on the dashboard
  const initialCards: CardProps[] = [];
  const [cards, updateCards] = useState(initialCards);
  const { id, onClick } = props;
  const cardTypes = ['chart', 'grid'];

  // build list for cards dropdown
  const dropDownList: ListItem[] = cardTypes.reduce(
    (carry: ListItem[], type) => [
      {
        label: type.toUpperCase(),
        onClick: () =>
          updateCards(currentCards => {
            const newCard = {
              id: uuidv1(),
              type,
            };
            return [...currentCards, newCard];
          }),
      },
      ...carry,
    ],
    [],
  );
  return (
    <section className="dashboardRow">
      <style jsx>{`
        .dashboardRow {
          border: solid var(--border-width-default) var(--light-gray);
          border-radius: var(--border-radius-default);
          box-shadow: 0 1px 1px var(--box-shadow-color1);
          margin-bottom: var(--margin-bottom-default);
        }
      `}</style>
      <header>
        <h2>
          Row: <em>{id.split('-')[0]}</em>
        </h2>
        <button className="alert deleteRow" onClick={onClick}>
          <Icon size="20" name="baseline-delete-24px" />
        </button>
      </header>
      <div className="rowContent">
        {cards.length > 0 &&
          cards.map((card: CardProps, idx: number) => (
            <Card
            key={idx.toString()}
            {...card}
              onClick={() =>
                updateCards((currentCards: CardProps[]) =>
                currentCards.filter(item => item.id !== card.id),
                )
              }
            />
          ))}
        <Dropdown
          label={<Icon size="80" name="baseline-add_circle-24px" />}
          list={dropDownList}
        />
      </div>
      <style jsx>{`
        .dashboardRow {
          min-width: var(--card-dimension);
        }
        .rowContent {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          padding: 0.5em 0 0.5em 0.5em;
        }
        header {
          display: flex;
          align-items: center;
          justify-self: end;
          justify-content: space-between;
          padding: 0.5em 1em;
          background-color: var(--light-gray);
          & h2 {
            font-size: 1.2em;
            margin: 0;
            line-height: 1;
          }
          & button {
            opacity: 0;
            font-size: 1em;
            margin-left: 0.5em;
            border-radius: 50%;
            padding: 0.3em;
          }
          &:hover {
            & button {
              opacity: 1;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Row;
