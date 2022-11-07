import logo from './logo.svg';
import './App.css';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  props.topics.map((a) => {
    lis.push(
      <li key={a.id}>
        <a
          id={a.id}
          href={'/read/' + a.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {a.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];
  return (
    <div className="App">
      <Header
        title="React"
        onChangeMode={() => {
          alert('Header');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, React"></Article>
    </div>
  );
}

export default App;
