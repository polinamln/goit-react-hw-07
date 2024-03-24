import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contactsV = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contactsV.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contact data={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
