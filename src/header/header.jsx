import logo from '../logo.svg';


export default function Header(props){
    return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/ㅋ.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >

      {props.a}
      {props.children}  
    </a>
  </header>)
}