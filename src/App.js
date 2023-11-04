function App() {
  return (
    <div className="App max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By john Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Downloads: </strong>
            300
          </li>
          <li>
            <strong>Likes: </strong>
            400
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
