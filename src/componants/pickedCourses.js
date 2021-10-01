import React from 'react'
import {connect} from 'react-redux';
import { getRemoteData } from '../store/actions'
import {  useEffect } from "react";



function PickedCourses(props) {
    console.log('props.daaaaaata teaws', props.bookData[0]);

    useEffect(()=> {
        console.log("in useEffect <<<< ")
        props.getRemoteData();
      
    }, []);

    
    return (
        <>
              <section>
                  <h1>MY Cart</h1>
            <ul>
            {props.bookData[0] &&
            props.bookData[0].map((person, idx) =>
            <>
                <li key={idx} >{person.id} </li>
                <li key={idx} >{person.title} </li>
                <li key={idx} >{person.author} </li>
                <li key={idx} >{person.image} </li>
                <li key={idx} >???????? </li>

            
              </>  
            )}
            </ul>
            
        </section>

        

        </>
    )
}
const mapStateToProps = state => ({
    bookData: state.bookData,
  
});

const mapDispatchToProps = {  getRemoteData };

export default connect(mapStateToProps,mapDispatchToProps)(PickedCourses)