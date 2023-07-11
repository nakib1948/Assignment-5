import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [displayTexts, setDisplayTexts] = useState([]);

  const handleInputChange = (event) => {
    if(event.target.value !='')
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(inputText!='')
    setDisplayTexts([...displayTexts, inputText]);
    setInputText('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="py-6  text-purple text-2xl font-bold">
        <h1>My Todo App</h1>
      </header>
      <section className="p-8">
        <form onSubmit={handleFormSubmit} className="mb-4">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            rows="4"
            cols="50"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="What will I do Today"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
           Add Task
          </button>
        </form>
        {displayTexts.map((text, index) => (
          <p key={index} className="bg-white rounded-lg p-4 mt-4 shadow-md">
            {text}
          </p>
        ))}
      </section>
      <footer className="py-4 bg-gray-200 text-gray-700 text-center">
        <p>“With great power comes great responsibility.” — Spider-Man.</p>
      </footer>
    </div>
  );
};

export default App;
