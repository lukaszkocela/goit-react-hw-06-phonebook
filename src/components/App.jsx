import css from './App.module.css'
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';

export const App = () => {

  return (
    <div className={css.layout}>
      <h1>Phonebook</h1>
      <Phonebook />

      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <PhoneBookList />
    </div>
  );
};