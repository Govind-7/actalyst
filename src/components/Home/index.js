import { useState } from "react";

import "./index.css";

const botArray = [
  "sure ,i am here to help you please mention order id",
  "thanks for providing order id  what do you want?",
  "mention your number over customer exicutive will call you",
  "wait a second you will get a call",
];
let count = 0;
const Home = () => {
  const [input, setinput] = useState("");
  const [files, setFiles] = useState([]);

  const inputFunction = (event) => {
    event.preventDefault();

    const a = document.getElementById("conversation");

    const container = document.createElement("div");
    const msgContainer = document.createElement("div");
    const userImage = document.createElement("img");
    userImage.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-EY1mT7jCzZdQTRCYw3gRI9TpR8pyKvP7HWEQYVwwA&s"
    );
    container.classList.add("msg-align");
    const name = document.createElement("h3");
    name.textContent = "User";
    name.classList.add("user-heading");

    const b = document.createElement("p");
    container.appendChild(userImage);
    userImage.classList.add("user-image");

    b.textContent = input;
    msgContainer.appendChild(name);
    msgContainer.appendChild(b);
    container.appendChild(msgContainer);

    a.appendChild(container);

    const container1 = document.createElement("div");
    const msgContainer1 = document.createElement("div");
    const userImage1 = document.createElement("img");
    userImage1.setAttribute(
      "src",
      "https://t4.ftcdn.net/jpg/05/07/71/73/360_F_507717306_HL8bDL6JAMwIppgFJvdEiL3brJa2bM5G.jpg"
    );
    container1.classList.add("msg-align");
    const name1 = document.createElement("h3");
    name1.textContent = "Bot";
    name1.classList.add("user-heading");

    const b1 = document.createElement("p");
    container1.appendChild(userImage1);
    userImage1.classList.add("user-image");

    b1.textContent = botArray[count % 4];
    msgContainer1.appendChild(name1);
    msgContainer1.appendChild(b1);
    container1.appendChild(msgContainer1);

    setTimeout(() => {
      a.appendChild(container1);
    }, 1000);

    setinput("");
    count += 1;
  };

  const pdfFunction = (e) => {
    e.preventDefault();
    const s = document.getElementById("pdf");
    setFiles((prev) => [...prev, s.files[0].name]);
    // console.log(s.files[0].name);
  };

  return (
    <div className="home-bg">
      <h1>
        Chatboat interfase <span className="online">Online</span>
      </h1>
      <div className="msg-pdf-align">
        <div className="conversation-bg">
          <div className="endchat-align">
            <h2>Conversation</h2>
            <button className="endchat-button">End chat</button>
          </div>
          <div id="conversation" className="conversation"></div>

          <form onSubmit={inputFunction}>
            <textarea
              id="massage"
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
              }}
              cols="30"
              rows="5"
              placeholder="Type your massage here ."
              required
            />

            <br />
            <button className="submit-button" type="submit">
              Send message
            </button>
          </form>
        </div>

        <div className="pdf-bg">
          <form onSubmit={pdfFunction}>
            <h1>PDF files</h1>
            <p>upload PDF</p>
            <div className="input-file">
              <input required id="pdf" type="file" />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <div className="uploaded-file-container">
            <h1>Uploaded PDF s</h1>
            {files.length === 0 && (
              <p className="special">no file uploaded yet </p>
            )}
            <div className="pdf-container">
              <div>
                {files.map((item) => (
                  <p>{item}</p>
                ))}
              </div>

              {files.length !== 0 && (
                <span className="download">download all </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
