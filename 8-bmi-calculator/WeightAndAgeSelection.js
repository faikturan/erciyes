import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';

import { BOX, ROW, CENTER, TEXT_LABEL, TEXT_VALUE } from "./style";

const MIN_WEIGHT = 10;
const MAX_WEIGHT = 150;
const MIN_AGE = 1;
const MAX_AGE = 150;

export default function WeightAndAgeSelection({
    style,
    weight,
    setWeight,
    age,
    setAge
}) {
    const [timer, setTimer] = useState(null);

    function decreaseWeight(){
        setWeight((value)=> {
            if(value > MIN_WEIGHT){
                return value - 1;
            }else {
                return MIN_WEIGHT;
            }
        });
    }

    function increaseWeight(){
        setWeight((value)=> {
            if(value < MAX_WEIGHT){
                return value + 1;
            }else {
                return MAX_WEIGHT;
            }
        });
    }

    function decreaseAge(){
        setAge((value)=> {
            if(value > MIN_AGE){
                return value - 1;
            }else {
                return MIN_AGE;
            }
        });
    }

    function increaseAge(){
        setAge((value)=> {
            if(value < MAX_AGE){
                return value + 1;
            }else {
                return MAX_AGE;
            }
        });
    }

    function fastChangeValue(type, isIncrease){
        const timer = setInterval(() => {
            if(isIncrease){
                if( type === "age"){
                    increaseAge();
                }else{
                    increaseWeight();
                }  
            }else{
                if( type === "age"){
                    decreaseAge();
                }else{
                    decreaseWeight();
                }  
            }
        }, 50);

        setTimer(timer);
    }

    function clearTimer(){
        clearInterval(timer);
        setTimer(null);
    }

  return (
    <View style={style}>

    </View>
  )
}

const styles = StyleSheet.create({

});
