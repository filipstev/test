import React from 'react';
import classes from './ClanTima.module.css';

const ClanTima = (props) => {
  return (
    <div onClick={() => props.onDelete(props.name)} className={classes.Wrapper}>
      {props.ime} {props.prezime}
    </div>
  );
};

export default ClanTima;
