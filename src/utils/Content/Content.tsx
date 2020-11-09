import React, { FC } from 'react';
import Header from 'App/components/global/Header/Header';
import { SideNav } from 'App/components/global/SideNav/SideNav';
import './Content.scss';

const Content: FC = (props) => {
    const { children } = props;

    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                <SideNav />
                {children}
            </main>
        </div>
    );
};

export default Content;
