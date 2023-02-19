import {useState} from "react";
import '../styles/Contacts.scss'

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredEmail('');
    setEnteredName("");
    setReviewMsg("")
  };

  return(
    <div className="contacts mb-50">
      <form className="form" onSubmit={submitHandler}>
        <div className="form__group">
          <input
            value={enteredName}
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setEnteredName(e.target.value)}
            required
          />
        </div>

        <div className="form__group">
          <input
            value={enteredEmail}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEnteredEmail(e.target.value)}
            required
          />
        </div>

        <div className="form__group">
          <textarea
            value={reviewMsg}
            rows={5}
            type="text"
            placeholder="Write your message"
            onChange={(e) => setReviewMsg(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="addTOCart__btn">
          Submit
        </button>
      </form>
    </div>);
};

export default Contact;
