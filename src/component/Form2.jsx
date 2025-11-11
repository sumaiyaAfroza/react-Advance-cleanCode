import { useState } from "react";


export default function Form() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  const isSending = status === "sending";
  const isSent = status === "sent";
  const isEmpty = text.trim() === ""; // Check if textarea is empty

  if (isSent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-green-600">Thanks for feedback!</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <form onSubmit={handleSubmit}>
          <p className="text-lg font-semibold mb-4">How was your stay at The Prancing Pony?</p>
          <textarea
            disabled={isSending}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Write your feedback here..."
          />
          <button
            disabled={isSending || isEmpty}
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
          {isSending && <p className="mt-3 text-blue-600 text-center">Sending...</p>}
          {isEmpty && !isSending && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              Please write something before sending
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}