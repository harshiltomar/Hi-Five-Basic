"use client";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const InputForm = () => {
  const [content, setContent] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");

  const handleAddEmail = () => {
    if (newEmail) {
      setEmails([...emails, newEmail]);
      setNewEmail("");
      console.log(newEmail);
    }
  };

  const handleSendMail = async () => {
    console.log("Sending content: ", content, "to the Emails: ", emails);
    try {
      const response = await axios.post("/api/mail", {
        content,
        emails,
      });
    } catch (error) {
      console.log("Error sending the mails", error);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center bg-white m-28 p-4 rounded-lg">
        <div className="pt-8">
          <div className="text-3xl font-semibold">Enter Info</div>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-1 mt-4"
            type="text"
            value={content}
            placeholder="Enter Content"
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex flex-row">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-1 mt-4"
              type="email"
              value={newEmail}
              placeholder="Enter Email"
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button
              onClick={handleAddEmail}
              className="bg-gray-800 text-white border border-gray-30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-1 mt-4"
            >
              +
            </button>
          </div>
          <ul className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-1 mt-4">
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
          <button
            onClick={handleSendMail}
            className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Send Emails &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
