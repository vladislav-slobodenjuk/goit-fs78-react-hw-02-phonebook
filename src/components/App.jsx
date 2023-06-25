import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.state;

    const name = e.target.name.value;
    const number = e.target.number.value;

    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) return alert(`${name} is already in contacts.`);

    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  handleDelete = e => {};

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          // onInputChange={this.handleInputChange}
          onHandleSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        {/* <Filter value={this.state.filter} onChange={this.handleInputChange} />
        <ContactList
          contacts={contacts}
          onDeleteClick={id => this.setState({ contacts: contacts.filter(contact => contact.id!== id) })}
        />
       */}
        {/* <Filter .../> */}
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleInputChange}
        />

        <ContactList
          contacts={filteredContacts}
          // onDeleteClick={id => this.setState({ contacts: contacts.filter(contact => contact.id!== id) })}
        />
      </div>
    );
  }
}
