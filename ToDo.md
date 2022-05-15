<!-- ### Home/List Page
-[] When a movie poster is clicked, a user should be brought to the /details view for that movie.

### Details Page
-[] The details page should have a Back to List button, which should bring the user to the Home/List Page

Hint: // history.push()

### 
-[] Research cards for your movie posters on the list page
 -[] Research grids for your movie posters on the Movie List page
 -[] Commit your code frequently! You should have at 15+ commits on a project of this size. 
 -[] Use branches to help break down your features.
 -[] Comment your code.
 -[] Update this README to include a description of the project in your own words.










// Review.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Review() {
  console.log('in Review()');

  const history = useHistory();
  // const dispatch = useDispatch();

  let feeling = useSelector((store) => store.feelingReducer);
  let understanding = useSelector((store) => store.understandingReducer);
  let support = useSelector((store) => store.supportReducer);
  let comments = useSelector((store) => store.commentReducer);

  const onReviewSubmit = () => {
    let feedbackSurvey = { feeling, understanding, support, comments };

    axios({
      method: "POST",
      url: "/feedback",
      data: feedbackSurvey,
    })
    history.push('/thankYou');
  };

  return (
    <>
      <h1>Review Your Feedback</h1>
      <h3>Feelings: {feeling}</h3>
      <h3>Understanding: {understanding}</h3>
      <h3>Support: {support}</h3>
      <h3>Comments: {comments}</h3>

      <button onClick={onReviewSubmit}>SUBMIT FEEDBACK</button>
    </>
  );
}

export default Review;










 
 -->
