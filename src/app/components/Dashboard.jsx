import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({groups}) => (
    <div className="container m-5">
        <div className="row">
            { groups.map(group => (
                <ConnectedTaskList key={group.id} id={group.id} name={group.name}></ConnectedTaskList>
            )) }
        </div>
    </div>
);

function mapStateToProps(state){
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);