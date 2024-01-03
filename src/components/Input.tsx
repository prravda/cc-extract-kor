import React, { useState, FormEvent } from "react";

export function Input() {
  const [code, setCode] = useState<string>(``);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log(code); // This will log the code with its original formatting
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <textarea
        className="input__textarea"
        placeholder="Input your code here"
        value={code}
        onChange={handleCodeChange}
        rows={30}
        cols={100}
        style={{ whiteSpace: "pre" }} // Preserves whitespace and formatting
      />

      <div style={{ marginTop: "10px" }}>
        <button type="submit" className="input__submit">
          analyze
        </button>
      </div>
    </form>
  );
}
