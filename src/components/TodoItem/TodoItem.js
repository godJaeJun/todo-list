import React, { Component } from 'react';
import styles from "./TodoItem.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class TodoItem extends Component {
  render() {
      /*
      done : 해당 일정을 완료했는지 완료하지 않았는지 여부
      children: 일정 정보 내용을 나타낸다.
      onToggle: 일정 완료 상태를 껏다 켰다 하는 함수 
      onRemove: 일정을 제거
      */
      const { done, children, onToggle, onRemove} = this.props;
    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
        <div className={cx('text',{done})}>{children}</div>
        <div className={cx('delete')} onClick={(e)=>{
            onRemove();
            e.stopPropagation();//부모안에 포함되어 있어서 클릭해도 변화없는 걸 막기위해 부모 이벤트를 stop시킨다.
        }}>[지우기]</div>
      </div>
    );
  }
}
