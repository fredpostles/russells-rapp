import React, { useState } from "react";
import Navigation from "./Navigation";
import SearchBar from "./Contacts/SearchBar";
import Results from "./Contacts/Results";
import { useSelector } from "react-redux";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allUsers = useSelector((state) => state.allUsers);
  const user = useSelector((state) => state.user);

  // remove blocked from friends
  const friends = user.friends.filter((contact) => {
    return !user.blocked.includes(contact);
  });

  const results = allUsers.filter((contact) => {
    // if blocked, don't show in contacts
    if (user.blocked && user.blocked.includes(contact.id)) return;
    // if search term entered, show matching contacts
    if (searchTerm) {
      return contact.userName.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return friends.includes(contact.id);
  });

  return (
    <>
      Contacts
      <Navigation />
      <SearchBar setSearchTerm={setSearchTerm} />
      {results.length > 0 ? (
        <Results results={results} />
      ) : (
        <p>Sorry, no contacts found</p>
      )}{" "}
    </>
  );
};

export default Contacts;
