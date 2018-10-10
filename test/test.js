const {bubbleSort, insertionSort} = require('../algos');
const chai = require('chai');
const should = chai.should();

describe('bubble sort', ()=>{
    it('should return a given array in order', ()=>{
        let unsorted = [4,6,2,3,7,1,5]
        bubbleSort(unsorted).should.be.eql([1,2,3,4,5,6,7])
        let unsortedTwo = [1,2,3,4,5,6,0]
        bubbleSort(unsortedTwo).should.be.eql([0,1,2,3,4,5,6])
    })
    it('should not freak out about duplicates', ()=>{
        let unsorted = [4,6,6,2,3,7,1,5,3]
        bubbleSort(unsorted).should.be.eql([1,2,3,3,4,5,6,6,7])
    })
})

describe('insertion sort', ()=>{
    it('should return a given array in order', ()=>{
        let unsorted = [4,6,2,3,7,1,5]
        insertionSort(unsorted).should.be.eql([1,2,3,4,5,6,7])
        let unsortedTwo = [1,2,3,4,5,6,0]
        insertionSort(unsortedTwo).should.be.eql([0,1,2,3,4,5,6])
    })
    it('should not freak out about duplicates', ()=>{
        let unsorted = [4,6,6,2,3,7,1,5,3]
        insertionSort(unsorted).should.be.eql([1,2,3,3,4,5,6,6,7])
    })
})
