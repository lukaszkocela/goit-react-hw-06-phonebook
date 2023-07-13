
import { useDispatch } from 'react-redux';
import css from './Phonebook.module.css';
import { addNewContact } from 'redux/contactsSlice';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

dispatch(addNewContact(name,number));

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

