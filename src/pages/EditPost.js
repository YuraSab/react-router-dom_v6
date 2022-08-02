import React, { Component } from 'react';
import {useParams} from "react-router";

const EditPost = () => {

    const {id} = useParams();

  return (
    <div>
        <h1>
            Edit post {id}
        </h1>
    </div>
  )
}

export { EditPost }