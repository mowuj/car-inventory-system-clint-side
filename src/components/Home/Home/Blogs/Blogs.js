import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row '>
            
                <h3 className='text-start m-2'>1. Difference between JavaScript and Node.js?</h3>
                <div className=' d-md-flex text-start mt-3 ms-2'>
                    <div className='col-md-6 col-sm-12'>
                        <h4>JavaScript :</h4>
                    <ul>
                    <li>
                        Javascript can only be run in the browsers..
                    </li>
                    <li>
                        It is basically used on the client-side..
                    </li>
                    <li>
                        Javascript is capable enough to add HTML and play with the DOM. .
                    </li>
                    <li>
                        Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    </li>
                    <li>
                        Javascript is used in frontend development.
                    </li>
                </ul>
                </div>
                    <div className='col-md-6 col-sm-12'>
                        <h4>NodeJS :</h4>
                    <ul>
                    <li>We can run Javascript outside the browser with the help of NodeJS..</li>
                    <li>
                        It is mostly used on the server-side.
                    </li>
                    <li>
                        Nodejs does not have capability to add HTML tags. 
                    </li>
                    <li>
                        V8 is the Javascript engine inside of node.js that parses and runs Javascript. 
                    </li>
                    <li>
                        Nodejs is used in server-side development.
                    </li>
                </ul>
                </div>
                </div>
                <h3 className='text-start m-2'>2. Difference between sql and nosql?</h3>
                <div className=' d-md-flex text-start mt-3 ms-2'>
                    <div className='col-md-6 col-sm-12'>
                        <h4>SQL:</h4>
                    <ul>
                    <li>
                        RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                    </li>
                    <li>
                        These databases have fixed or static or predefined schema.
                    </li>
                    <li>
                        These databases are not suited for hierarchical data storage.
                    </li>
                    <li>
                        These databases are best suited for complex queries.
                    </li>
                    <li>
                        Vertically Scalable.
                    </li>
                </ul>
                </div>
                    <div className='col-md-6 col-sm-12'>
                        <h4>NOSQL :</h4>
                    <ul>
                    <li>Non-relational or distributed database system.</li>
                    <li>
                        They have dynamic schema.
                    </li>
                    <li>
                        These databases are best suited for hierarchical data storage. 
                    </li>
                    <li>
                        These databases are not so good for complex queries. 
                    </li>
                    <li>
                        Horizontally scalable.
                    </li>
                </ul>
                </div>
                </div>
            
            <div className=' d-md-flex text-start mt-3 ms-2'>
                <div className='col-md-6 text-start'>
                <h3>3.What is the  purpose of jwt and how does it work?</h3>
                <p>
                Instead of storing information on the server after authentication, JWT creates a JSON web token and encodes, sterilizes, and adds a signature with a secret key that cannot be tampered with. This key is then sent back to the browser. Each time a request is sent, it verifies and sends the response back.
                The main difference here is that the user’s state is not stored on the server, as the state is instead stored inside the token on the client-side..
                
                </p>
                </div>
                <div className='col-md-6 ms-2 text-start'>
                    <h4> How JWT Works?</h4>
                <p>
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        <p>3 things in JWT</p>
                        <ul>
                            <li>
                                Header 
                            </li>
                            <li>
                                Payload 
                            </li>
                            <li>
                                Signature 
                            </li>
                </ul>
                </div>
            </div>
            <div >
                
            </div>
        </div>
        </div>
    );
};

export default Blogs;