import React, { useState } from 'react';
import Card from '../../card/card';
import Dropdown from '../../dropdown/dropdown';
import Icon from '../../icon/icon';

interface Props {
  data: {}; // static data sample for all cards
  id: string;
  onClick: () => void;
}

const Row: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  // All Cards displayed on the dashboard
  const initialCards: string[] = [];
  const [cards, addCard] = useState(initialCards);
  const { data, id, onClick } = props;
  const cardTypes = ['chart', 'grid'];
  const dropDownList = cardTypes.reduce(
    (carry, type) => [
      {
        label: type.toUpperCase(),
        onClick: () =>
          addCard(currentCards => {
            const count = currentCards.length + 1;
            const newCard = { data, type, title: `${type} ${count}` };
            return [newCard, ...currentCards];
          }),
      },
      ...carry,
    ],
    [],
  );
  console.log(dropDownList);
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
          Row <em>{id.split('-')[0]}</em>
        </h2>
        <button className="alert deleteRow" onClick={onClick}>
          <Icon size="20" name="baseline-delete-24px" />
        </button>
      </header>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-self: end;
          margin-bottom: 0.5em;
          padding: 0.5em 1em;
          background-color: var(--light-gray);
          & h2 {
            font-size: 1.2em;
            margin: 0;
            line-height: 1;
          }
          & button {
            font-size: 1em;
            margin-left: 0.5em;
            border-radius: 25%;
          }
        }
      `}</style>
      <style jsx global>{`
        .dashboardRow {
          & button.deleteRow {
            & svg {
              padding: 0;
            }
          }
        }
      `}</style>
      <div className="rowContent">
        {cards.map((card, idx) => (
          <Card key={idx.toString()} card={card} data={data} />
        ))}
        <Dropdown
          label={<Icon size="80" name="baseline-add_circle-24px" />}
          list={dropDownList}
        />
      </div>
      <style jsx global>{`
        .rowContent {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          padding: 0.5em 0 0.5em;

          & .toggleButton {
            width: var(--card-dimension);
            height: var(--card-dimension);
            text-align: center;
            padding: 0;
            border-radius: 10%;
            & svg {
              fill: var(--dark-gray);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Row;
