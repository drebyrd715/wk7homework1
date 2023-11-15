
function Workhistory(props) {
  return (
    <div>{props.work.map((el)=>{return<h3>{el}</h3>})}</div>
  )
}

export default Workhistory