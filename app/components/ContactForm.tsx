"use client";

import { useState } from "react";

const field =
  "w-full rounded-md bg-white/90 px-4 py-2.5 text-sm text-black placeholder:text-black/35 outline-none focus:bg-white transition-colors";

// No backend: "Send" opens the visitor's mail client with the message pre-filled.
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3 text-left">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          aria-label="Name"
          className={field}
        />
        <input
          required
          type="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Email"
          aria-label="Email"
          className={field}
        />
      </div>
      <textarea
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="I have idea!"
        aria-label="Message"
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="w-full rounded-md border border-white/30 py-2.5 text-sm text-white/90 hover:bg-white hover:text-black transition-colors cursor-pointer"
      >
        Send
      </button>
    </form>
  );
}
