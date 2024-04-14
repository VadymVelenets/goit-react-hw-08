export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectedContacts = (state) => state.contacts.items;
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors.js";

export const selectFilteredContacts = createSelector(
  [selectedContacts, selectNameFilter],
  (contacts, contactsFilter) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(contactsFilter.toLowerCase()));
  }
);
