import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import SpecificBook from "./Book";
//css file
import './index.css';

// const firstBook = {
//  author : 'Colleen Hoover',
//  title : 'It Ends with Us: A Novel',
//  img : 'https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL604_SR604,400_.jpg',
// }
const BookList = () => {
    return (
        <section className="bookList">
            {/* <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author} >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquam ut nobis quibusdam odio unde eos modi animi recusandae quae?
                     Veritatis ducimus in inventore voluptate.
                     Nam architecto facilis tempora debitis suscipit!
                </p>
            </Book> */}
            {/* <Book title = 'random title' number = {22} /> */}
            {books.map( (book) => {
                return(
                    <SpecificBook key = {book.id}  {...book}></SpecificBook>
                );
            })}
        </section>
    );
}

// const Image = () => {
//     return(
//         <img src="https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL604_SR604,400_.jpg" 
//         alt="bookImage" />
//     );
// }
// const Title = () => {
//     return(
//         <h1>It Ends with Us: A Novel </h1>
//     );
// }
// const Author = () => {
//     return(
//      <h4 style={{color: '#617d98', fontSize: '0.75rem',  marginTop: '0.25rem'}}>Colleen Hoover</h4>
//     );
// }
//this is what is doing under the hood
// const Greeting = () => {
//     return React.createElement(
//         'div',
//          {},
//          React.createElement('h1', {}, 'hello world')
//     );
// }

ReactDom.render(<BookList/>, document.getElementById("root"));