/**
 * 
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I'm h1 tag </h1>
 *          <h2> I'm h2 tag </h2>
 *      </div>
 * <div id="child2">
 *
 *          <h1> I'm h1 tag</h1>
 *          <h2>I'm h1 tag</h2>
 *      </div>
 * </div> 
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 */

const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child" },[
    React.createElement("h1", {}, "I'am an h1 tag"),
    React.createElement("h2", {}, "I'am an h2 tag"),
]),React.createElement("div", { id: "child" },[
    React.createElement("h1", {}, "I'am an h1 tag"),
    React.createElement("h2", {}, "I'am an h2 tag"),
])
]);


console.log(heading)

const root = ReactDOM.createElement(document.getElementById("root"));

root.render(parent);
