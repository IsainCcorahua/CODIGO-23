import { Stepper, Step } from 'react-form-stepper';
import Step1 from "./components/step1";
import Step2 from './components/step2';
const App = () => {
  const [stepNumber, setStepNumber] = useState(0);  
  const nextStep = () =>{
    setStepNumber(stepNumber + 1)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Stepper>
            <Step label= "Paso 1"/>
            <Step label= "Paso 2"/>
          </Stepper>
          {stepNumber === 0 && <Step1/>}
          {stepNumber === 1 && <Step2/>}
          <button onClick={()=> nextStep()}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default App;
