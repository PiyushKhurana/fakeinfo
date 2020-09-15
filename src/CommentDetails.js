import React from 'react';
import faker from 'faker';

const CommentDetails=(props)=>{
return (
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} style={{width:500,height:600}}/>
        </a>
        <div className="content">
            <a href="/" className="author underline" >
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{faker.company.catchPhrase()}</div>
        </div>
    </div>
);
};
export default CommentDetails;