import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
      name: '',
      number: '',
    });
    // this.setState({ name: '' });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm
          name={this.state.name}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        /> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Number:
            <input
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        {/* <Filter .../> */}
        {/* <ComponentList .../> */}

        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
