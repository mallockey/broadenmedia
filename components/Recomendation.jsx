import React from 'react';
import recObj from '../data/recommendation'

const Recommendation = (props) => {

  let recommendText = ""
  let fellInWhichWay = null
  if(props.usersScore.democratic.score === props.usersScore.republican.score){
    recommendText = "Your media is well balanced!"
    fellInWhichWay = 'balanced'
  }else if (props.usersScore.democratic.score > props.usersScore.republican.score){
    recommendText = "Your media sources fall more left than right we recommend the below sources"
    fellInWhichWay = 'left'
  }else{
    recommendText = "Your media sources fall more right than left we recommend the below sources"
    fellInWhichWay = 'right'
  }

  return(
    <div className="recommendationContainer">
      <h3>{recommendText}</h3>
      <div className="recommandationSubContainer">
      { 
        fellInWhichWay === 'balanced' ? '' : 
          fellInWhichWay === 'left' ?
            Object.keys(recObj.needsMoreRepub).map(sourceInfo => {
              return (
                <a key={Math.random()} href={recObj.needsMoreRepub[sourceInfo].siteUrl}>
                  <img src={recObj.needsMoreRepub[sourceInfo].image} />
                </a>
              )
            }) : 
              Object.keys(recObj.needsMoreDemo).map(sourceInfo => {
                return (
                  <a key={Math.random()} href={recObj.needsMoreDemo[sourceInfo].siteUrl}>
                    <img src={recObj.needsMoreDemo[sourceInfo].image} />
                  </a>
                )
            }) }
      </div>
    </div>
  )
}

export default Recommendation