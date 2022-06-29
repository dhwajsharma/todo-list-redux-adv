import React from 'react';
import style from '../styles/modules/title.module.scss';

const PageTitle = ({ children }) => <p className={style.title}>{children}</p>;

export default PageTitle;
