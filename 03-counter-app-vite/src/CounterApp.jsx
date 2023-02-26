import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleIncrease = () => {
        setCounter( (c) => c + 1 )
    }
    const handleDecrease = () => {
        setCounter( (c) => c - 1 )
    }
    const handleReset = () => {
        setCounter( (c) => c = value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleIncrease }> +1 </button>
            <button onClick={ handleDecrease }> --1 </button>
            <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}