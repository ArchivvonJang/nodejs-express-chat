import RoomItem from './RoomItem';
import classes from './RoomList.module.css';
import _Footer from '../footer/Footer';
import _Header from '../header/Header';

function Roomlist(props) {
  return (
    <>
    <_Header/>
    <div className={classes.list}>
        <div className={classes.title}>전체 목록</div>  
      {props.roomItems.map((roomItem) => (
        <RoomItem
          key={roomItem.room_num}
          name={roomItem.room_name}
          owner={roomItem.owner}
          max_part={roomItem.max_participants}
          number_part={roomItem.number_participants}
          date={roomItem.reg_date}
        />
      ))}
    </div>
    <_Footer/>
    </>
  );
}

export default Roomlist;