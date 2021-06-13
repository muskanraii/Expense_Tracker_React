import  "./Card.css" 

function Card(props){
    const classes = "card " + props.className;
  return(<div className={classes}>{props.children}
  </div>);
}

export default Card;

// card here is a composition to rexplasin child props 