import classes from './List.module.css';

function List(props) {
  return <div className={classes.list}>{props.children}</div>;
}

export default List;