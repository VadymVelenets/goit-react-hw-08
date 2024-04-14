import toast, { Toaster } from "react-hot-toast";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
export default function Contacts() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch((e) => {
        toast.error("Sorry, we were unable to access your contact list...");
        console.log(e);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Your contacts</h1>
      <ContactForm />
      <SearchBox />  
      <ContactList />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
