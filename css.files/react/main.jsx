function Person (props) {
    return (
    <div className="person">
        <h1> {props.name} </h1>
        <p> My Age : {props.age} </p>
    </div>
    );
  }
  var app = (
    <div>
      <person name="Max" age="28" />
      <person name="Manu" age="29" />
    </div>
  );
  
  
  ReactDOM.render(app,
                  document.querySelector('#app')
                 );