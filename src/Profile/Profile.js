import React from 'react'
import propTypes from 'prop-types';

function Profile({fullName, bio, profession, children, handleName}) {
  return (
    <div>
 <h1> {fullName} </h1>
 <p>{bio} </p>
 <h1> {profession} </h1>
 <div> {children} </div>
 <button onClick={()=> handleName(fullName)} >click me!</button>

 </div>
  )


}
Profile.defaultProps = {
    fullName : "MOssad mefffff", bio:"*****", profession:"none"
}
Profile.propTypes = {
fullName : propTypes.string.isRequired , 
bio : propTypes.string.isRequired , 
profession : propTypes.string.isRequired , 
handleName : propTypes.func.isRequired , 
children : propTypes.element.isRequired , 
}
export default Profile