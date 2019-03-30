
/*

Functional component called MyApp

Returns a single jsx element (being more analytical i see ul to ul..it wraps all inside)
*/
function MyApp() {
  return (
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </ul>
  )
}


ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)

