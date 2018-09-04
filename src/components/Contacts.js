import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "Jdoe@gmail.com",
        phone: "111-111-11111"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "KWilliams@gmail.com",
        phone: "222-222-22222"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "Henry@gmail.com",
        phone: "333-333-33333"
      }
    ]
  };

  deleteContact = id => {
    // console.log(id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contacts.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
