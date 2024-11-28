import { useState } from "react";
import { StateList } from "./List/StateList";
import emailjs from "@emailjs/browser"

const Book = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [stateValue, setstateValue] = useState("");
  const [termsAgreement, settermsAgreement] = useState(false);
  const [date, setdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && stateValue!== "" && name !== "" && termsAgreement!== false && date !== "") {
      const formTemplate = {
        name: name,
        email: email,
        state: stateValue,
        date: date
      }
      emailjs.sendForm('service_gf4yui2', 'template_jt2ud0w', formTemplate, {
        publicKey: ""
      })
      .then(
        () => {
          console.log('SUCCESS!, Schedule has been sent to your mail');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    else{
      return
    }

  }
  return (
    <div>
      <div className="flex justify-center mt-12">
        <div className="bg-tone md:w-2/5 sm:w-2/3 w-4/5 min-h-72 rounded p-px">
          <div className="text-white bg-dark h-full rounded p-4 ">
            <div className="flex justify-center">
              <h3 className="text-2xl font-bold">Book Reservation</h3>
            </div>
            <div className="mt-4">
              <h3 className="text-xs font-bold text-green">
                * All Fields are required
              </h3>
            </div>
            <form className="text-black">
              <div className="flex-auto mt-4">
                <div>
                  <label className="text-white text-sm" htmlFor="name">
                    Enter Name:
                  </label>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-8 my-2 rounded p-2"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>
              <div className="flex-auto mt-2">
                <label className="text-white text-sm" htmlFor="email">
                  Enter Email:
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex justify-center w-full h-8 my-2 rounded p-2"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                  aria-required
                />
              </div>
              <div className="flex-auto mt-2">
                <label className="text-white text-sm mr-2" htmlFor="Location">
                  Select State:
                </label>
                <select
                  name="state"
                  value={stateValue}
                  className="h-8 px-2 mt-2 rounded"
                  onChange={(e) => setstateValue(e.target.value)}
                  required
                >
                  <option value="">Please Select a State</option>
                  {StateList &&
                    StateList.map((states, id) => (
                      <option key={id} value={states.id}>{states.state}</option>
                    ))}
                </select>
              </div>
              <div className="flex items-center mt-4">
                <label className="text-white text-sm mr-2" htmlFor="date">
                  Select Date:
                </label>
                <input
                  name="date"
                  type="date"
                  className="h-8 px-2 rounded"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                  required
                />
              </div>
              <div className="mt-2 mb-8">
                <input
                  name="agreement"
                  type="checkbox"
                  className="w-4 h-4"
                  value={termsAgreement}
                  onChange={() => settermsAgreement(!termsAgreement)}
                  checked={termsAgreement}
                  required
                />
                <label className="text-white text-sm ml-2" htmlFor="agreement">
                  I agree to the terms and conditions.
                </label>
              </div>
              <button onClick={() => handleSubmit()} className="bg-green w-full h-8 active:bg-tone rounded mb-8">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default Book;
