import React, { useState } from 'react';
import Card from '../../card/card';
import Dropdown from '../../dropdown/dropdown';

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
  return (
    <section className="dashboardRow">
      <header>
        <h2>Row {id}</h2>
        <button onClick={onClick}>Remove Row 🗑</button>
      </header>
      <div className="rowContent">
        {cards.map((card, idx) => (
          <Card key={idx.toString()} card={card} data={data} />
        ))}
        <Dropdown
          label="Add Card"
          list={[
            {
              label: 'Chart',
              onClick: () =>
                addCard(currentCards => {
                  const newCard = { data, title: 'Some Card', type: 'chart' };
                  return [newCard, ...currentCards];
                }),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Row;
