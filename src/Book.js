import React from 'react'

// {img, title, author, childern}
const Book = ({img, title, author}) => {
    //destructuring
    // const { img, title, author } = props;
    const clickHandler = () => {
        // console.log(e.target);
        //reference function example of events
      alert("Hello Books");
    }
         /* once i want to pass argument to function once i click on button we have to use arrow functino 
        not just invoke functionn as previous example in clickHandler */
    const complexExample = (author) => {
     console.log(author)
    }
    return (
       <article className="book">

         <img src = {img} alt="bookImage" />
        <h1 onClick={() => {console.log(title)}}>{title}</h1> 
        <h4 >{author}</h4>
        <button type="button" onClick={clickHandler}>reference example</button>
        <button type="button" onClick={() => complexExample(author)}>Complex example</button>
       </article>
    );
}
export default Book