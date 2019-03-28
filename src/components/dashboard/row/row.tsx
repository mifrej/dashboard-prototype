import React, { useState } from 'react';
import Card from '../../card/card';
import Dropdown from '../../dropdown/dropdown';

interface Props {
  data: {}; // static data sample for all cards
  key: string;
}

const Row: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  // All Cards displayed on the dashboard
  const initialCards: string[] = [];
  const [cards, addCard] = useState(initialCards);
  const { data, key } = props;
  return (
    <section className="dashboardRow">
      <header>
        <h2>Row {key}</h2>
        <button>Remove Row 🗑</button>
      </header>
      <div className="rowContent">
        {cards.map((card, id) => (
          <Card key={id.toString()} card={card} data={data} />
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
