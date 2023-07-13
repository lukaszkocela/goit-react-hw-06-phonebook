import css from './PhoneBookList.module.css';
import { PhoneBookContact } from 'components/PhoneBookContact/PhoneBookContact';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filteredContacts) => {
  if (filteredContacts === '') {
    return contacts;
  } else {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filteredContacts.filter));
  }
};

export const PhoneBookList = props => {
  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(state => state.filters);
  const visibleContacts = getVisibleContacts(contacts, filteredContacts);


  return (
    <ul>
      {visibleContacts.map(contact => (
          <li key={contact.id} className={css.list}>
            <PhoneBookContact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
