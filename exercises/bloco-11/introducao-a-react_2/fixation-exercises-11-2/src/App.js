import './App.css';
import Image from './image.js';
import cuteCat from './cute-cat-staring.jpg'

function App() {
  return (
    <div>
      <Image source = {cuteCat} alternativeText = 'Cute cat staring' />
    </div>
  );
}

export default App;
