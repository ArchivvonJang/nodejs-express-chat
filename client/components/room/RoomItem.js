import { useRouter } from "next/router";
import Card from '../ui/Card';
import classes from './RoomItem.module.css';

function RoomItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push('/' + props.id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
        <span className={classes.title}>
          {props.name}
          {' '}
          <span className={classes.subTitle}>
            {'('}{props.number_part} {'/'} {props.max_part}{')'}
          </span>
        </span>
        <p/>
        <span className={classes.owner}>
          {props.owner}
          {' '}
          <span className={classes.date}>
            {props.date}
          </span>
        </span>   
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Enter the Room</button>
        </div>
      </Card>
    </li>
  );
}

export default RoomItem;