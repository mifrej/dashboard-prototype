import React, { useState } from 'react';
import Card from '../card/card';
import Dropdown from '../dropdown/dropdown';
import EnergyHourly from './energy-hourly-sample';

interface Props {
  data: {}; // static data sample for all cards
}

const Dashboard: React.FunctionComponent<Props> = (
  props: Props,
): JSX.Element => {
  // All Cards displayed on the dashboard
  const initialCards: string[] = [];
  const [cards, addCard] = useState(initialCards);
  const { data } = props;
  return (
    <>
      <section>
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
      </section>
      <section className="cardsRow">
        {cards.map((card, id) => (
          <Card key={id.toString()} card={card} data={EnergyHourly} />
        ))}
      </section>
    </>
  );
};

export default Dashboard;
