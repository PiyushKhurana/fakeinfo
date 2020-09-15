import React from 'react';
import faker from 'faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

class App extends React.Component{
render(){
    return(
        <div className="ui container comments">
    <ApprovalCard>
    <CommentDetails author={faker.name.findName()} timeAgo="Today at 6:35 AM"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetails author={faker.name.findName()} timeAgo="Today at 4:10 PM"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetails author={faker.name.findName()} timeAgo="Yesterday at 9:00 PM"/>
    </ApprovalCard>
    </div>
    );
    };
};


export default ApprovalCard;