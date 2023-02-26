
/* const getResult = ( a, b ) => {
    return a + b;
}
import
const newMessage = {
    message: 'Hola Mundo',
    title: 'Miguel'
}; */

import PropTypes from 'prop-types'

export const FirstApp = ({
  title, 
  subTitle,
  name
}) => {

//  console.log(props);

  return (
    <>
        <h1 data-testid="test-title"> { title } </h1>
        {/* <code>{ JSON.stringify( newMessage ) }</code> */}
        <p>{ subTitle  }</p> 
        <p>{ subTitle  }</p> 
        <p>{ name  }</p> 
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  
}

FirstApp.defaultProps = {
  // title: 'No hay título',
  subTitle: 'No hay subtítulo',
  name: 'Miguel a.'
}