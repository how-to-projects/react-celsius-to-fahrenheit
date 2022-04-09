import { useRef, useState } from 'react'
import classes from './Calculator.module.css';

function Calculator(props) {

    const [celsiusVal, setCelsius] = useState(0);
    const [fahrenheitVal, setFahrenheit] = useState(0);

    const celsiusInputRef = useRef();
    const fahrenheitInputRef = useRef(); 

    const onChangeHandler = (e, conversion) => {

        if (conversion.toUpperCase() === 'C') {
            setFahrenheit(convertCToF(e.target.value));
        } else {
            setCelsius(convertFToC(e.target.value));
        }
        console.log(celsiusVal);
    }

    const convertCToF = (celsius) => {
        const f = celsius * (9 / 5) + 32;
        return f.toFixed(2);
    }

    const convertFToC = (fahrenheit) => {
        const c = (fahrenheit - 32) * 5 / 9;
        return c.toFixed(2);
    }

    return (

        <form>
            <div className={classes.control}>
                <label htmlFor='celsius'>Celsius</label>
                <input 
                type='number' 
                required id="celsius" 
                onChange={ (e) => { onChangeHandler(e, 'c') } } 
                ref={celsiusInputRef} />
                <span>C to F: { celsiusVal }</span>
            </div>
            <div className={ classes.control }>
                    <label htmlFor='fahrenheit'>Fahrenheit</label>
                    <input 
                    type='number' 
                    required 
                    id="fahrenheit" 
                    onChange={ (e) => { onChangeHandler(e, 'f') } } 
                    ref={ fahrenheitInputRef }/>
                    <span>F to C: { fahrenheitVal }</span>
                </div>
        </form>
    )
}

export default Calculator;