import React from 'react';
import {mergeSort} from '../SortingAlgorithms/sortingAlgorithms';
import './sortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i <100; i++) {
          array.push(randomIntFromInterval(5, 600));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = mergeSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'turqioise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
    }

    quickSort() {
        // We leave it as an exercise to the viewer of this code to implement this method.
    }

    heapSort() {
        // We leave it as an exercise to the viewer of this code to implement this method.
    }

    bubbleSort() {
        // We leave it as an exercise to the viewer of this code to implement this method.
    }

    testSortingAlgorithms(){

    }

    render() {
        const {array} = this.state;

        return (
            <div className='array-container'>
                <div>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.testSortingAlgorithms()}> Test Sorting Algorithms (BROKEN) </button>
                </div>
            
                {array.map((value, idx) => (
                    <div 
                        className='array-bar'
                        key = {idx}
                        style = {{height : `${value}px`}}>
                    </div>
                ))}
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

function arrayAreEqual(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    for(let i=0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}