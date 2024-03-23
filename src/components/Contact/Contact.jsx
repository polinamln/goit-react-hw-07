import css from "./Contact.module.css";
import { BsPersonHearts } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <div className={css.container}>
          <BsPersonHearts /> {data.name}
          <h1 className={css.text}></h1>
        </div>

        <div className={css.container}>
          <FaPhoneSquareAlt />
          <p className={css.text}>{data.number}</p>
        </div>
      </div>

      <button
        onClick={() => dispatch(deleteContact(data.id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
}
