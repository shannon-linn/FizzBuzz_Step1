import './App.css';
import FizzBuzz from './FizzBuzz.js';
const numbers = Array.from(Array(20).keys());



function App() {
 return (
    <div className="App">
	<ul className="fizzBuzz">
	{numbers.map((value,index) => { return (
	< li key={index+1} className={"listItem_"+FizzBuzz(value+1)}>
	{FizzBuzz(value+1).toString()}
</li>)})}
	</ul>
    </div>
  );
}
export default App;
