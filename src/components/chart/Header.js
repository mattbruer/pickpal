import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editTitle } from '../../store/actions/chartActions';
import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { title, editMode } = useSelector((state) => state.chart);
  return (
    <div className="header">
      <div className="header-left">
        <Link
          onClick={
            editMode
              ? () => {
                  let save = window.confirm('Save changes?');
                  alert('please implement this function');
                }
              : null
          }
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="header-center">
        {editMode ? (
          <input
            className="title-input"
            onChange={(e) => {
              dispatch(editTitle(e.target.value));
            }}
            value={title}
          />
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
