import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>

      {/* FIX THIS WRAPPING!!! */}
      {/* <h3 style="text-wrap:balance">
        <div style="white-space:nowrap">Thank you for visiting! </div>
        {greeting}
      </h3> */}
      <h3 style="text-wrap:balance">Thank you for visiting! {greeting}</h3>

      <button
        onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>

    </div>
  );
}
