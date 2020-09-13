import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timestamp="6:00 PM" 
                    text="Nice blog!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard><CommentDetail author="Alfonso" timestamp="6:00 PM" text="Perfect!" avatar={faker.image.avatar()} /></ApprovalCard>
            <ApprovalCard><CommentDetail author="Nicole" timestamp="6:00 PM" text="It is a beautifull blog!" avatar={faker.image.avatar()} /></ApprovalCard>
            <ApprovalCard><CommentDetail author="Javiera" timestamp="6:00 PM" text="Jajajajaja" avatar={faker.image.avatar()} /></ApprovalCard>
            <ApprovalCard><CommentDetail author="Joce" timestamp="6:00 PM" text="Asdf" avatar={faker.image.avatar()} /></ApprovalCard>         
            
            
            
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root'))