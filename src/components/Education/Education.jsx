
function Education(props) {
  return (
    <div>{props.edu.map((el)=>{return<h3>{el}</h3>})}</div>
  )
}

export default Education