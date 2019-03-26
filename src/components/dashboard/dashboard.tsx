import React, { useState } from 'react';
import Header from '../header/header';
import Meta from '../meta/meta';
import Dropdown from '../dropdown/dropdown';

interface Props {}

const Dashboard: React.FunctionComponent<Props> = (
  props: Props,
): JSX.Element => {
  const initialData = []; // data set for card
  const initialCardTypes = ['chart', 'grid'];
  const initialCards: Card[] = [{ title: 'Chart Title', type: 'chart' }];
  const [data] = useState(initialData);
  const [cardTypes] = useState(initialCardTypes);
  const [cards, addCard] = useState(initialCards);
  return (
    <main>
      <Meta />
      <Header />
      <section>
        <Dropdown
          label="Add Card"
          list={cards}
          onClick={() => addCard(cards)}
        />
      </section>
    </main>
  );
};

export default Dashboard;
