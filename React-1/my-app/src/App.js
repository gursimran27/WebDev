import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import Itemdate from './Components/Itemdate'

function App() {

  let response=[
    {
       login:"gursimran",
       da:27,
       mon:"jan",
       yea:2003
    },
    {
       login:"ani",
       da:2,
       mon:"oct",
       yea:2003
    },
    {
       login:"raj",
       da:20,
       mon:"july",
       yea:1998
    }
  ];

  return (

    // all the data shold we wrapped under single parent
    <div className="main">

       <Item name={response[0].login}>hello i am in item1</Item>
       <Itemdate day={response[0].da} month={response[0].mon} year={response[0].yea}></Itemdate>

       <Item name={response[1].login}></Item>
       <Itemdate day={response[1].da} month={response[1].mon} year={response[1].yea}></Itemdate>

        <Item name={response[2].login}></Item>
        <Itemdate day={response[2].da} month={response[2].mon} year={response[2].yea}></Itemdate>

       <div className="App"> 
          hello ji  
       </div>
  </div>
  );
}

export default App;
