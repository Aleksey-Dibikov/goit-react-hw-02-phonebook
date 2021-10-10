import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={s.TaskList}>
        {this.props.contacts.map(contact => (
          <li key={contact.id} className={s.TaskList_item}>
            {contact.name} : {contact.number}
            <button
              className={s.TaskList_button}
              onClick={() => this.props.onDeleteContact(contact.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;
