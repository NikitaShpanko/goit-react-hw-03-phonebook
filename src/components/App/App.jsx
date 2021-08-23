import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends React.Component {
  state = { contacts: [], filter: "" };

  onSubmit = ({ name, number }) => {
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return false;
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, { id: uuidv4(), name, number }],
    }));
    return true;
  };

  onDelete = (id) => {
    const delIndex = this.state.contacts.findIndex(
      (contact) => contact.id === id
    );
    this.setState((prev) => {
      prev.contacts.splice(delIndex, 1);
      return {
        contacts: [...prev.contacts],
      };
    });
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={this.state.contacts.filter((contact) =>
            contact.name.includes(this.state.filter)
          )}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
