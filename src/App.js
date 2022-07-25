import './App.css';
let name = "Anish Joshi";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name} </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, modi nam, omnis recusandae reiciendis cupiditate molestiae ipsa vel aut similique fuga rerum consequatur possimus! Sequi accusamus a quam quis? Iusto vitae quaerat accusantium distinctio.</p>
      </div>
    </>);
}

export default App;
