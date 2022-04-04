// import React from 'react';
// import PropTypes from 'prop-types';
// // import Potato from './Potato';


// // function Potato() {
// //   return <h2>I love Potato</h2>
// // }

// // function Food(props) {
// //     return (
// //     <h3>I like movie {props.fav}</h3>)
// //   }


// // function Food({fav}) {
// //   return <h3>I like {fav}</h3>
// // }

// function Food({ name, image, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={image} alt={name} />
//     </div>

//   );
// }

// const foodLike = [
//   {
//     id: 1,
//     name: 'Kimchi',
//     image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Samgyeopsal',
//     image:
//       'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: 'Bibimbap',
//     image:
//       'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: 'Doncasu',
//     image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: 'Kimbap',
//     image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
//     rating: 5,
//   },

// ];

// // function renderFood(dish){
// //   return <Food name={dish.name} picture={dish.image} />;
// // }

// // const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

// function App() {
//   return (
//     <div>

//       {/* <h1>Hello!!</h1> */}
//       {/* <Potato /> */}
//       {/* <Food fav="kimchi"  />
//       <Food fav="ramen"  />
//       <Food fav="kimchi"  /> */}

//       {foodLike.map(dish => (
//         <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
//       ))}

//       {/* {foodLike.map(renderFood)} */}

//     </div>

//   )
// }

// Food.propTypes = {
//   name : PropTypes.string.isRequired,
//   picture : PropTypes.string.isRequired,
//   rating : PropTypes.number
// };





// export default App;
