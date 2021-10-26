import { Button, Radio } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button type='primary'>Hello</Button>
        <br/>
        <Radio.Group value="large">
            <Radio.Button value="larger">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
    </div>
  );
}

export default App;
