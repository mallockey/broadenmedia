function calcScore(allSources){
  
  const leftWingSources = ['ABC News', 'Associated Press', 'Buzzfeed', 'Bloomberg', 'ABC News (AU)', 'CNN', 'CNN Spanish', 'Reddit /r/all', 
                           'The Huffington Post', 'MSNBC', 'Newsweek', 'NBC News', 'Politico', 'Time', 'The Washington Times','The Daily Beast', 'Mother Jones']

  const rightWingSources = ['Fox News', 'The American Conservative', 'The Wall Street Journal', 'National Review', 'The Blaze',
                            'The Epoch Times', 'Newsmax', 'The Daily Wire', 'OAN', 'The Federalist', 'The American Spectator', 'Washington Examiner']

  let scoreObj = {
    republican : {
      republicanSources : [],
      score : 0
    },
    democratic : {
      democraticSources : [],
      score: 0
    },
    uncategorized : {
      uncategorizedSources : [],
      score: 0
    }
  }
  
  for(let i = 0; i < allSources.length; i++){
    if(leftWingSources.includes(allSources[i].name)){
      scoreObj.democratic.democraticSources.push(allSources[i].name)
      scoreObj.democratic.score++
    }else if (rightWingSources.includes(allSources[i].name)){
      scoreObj.republican.republicanSources.push(allSources[i].name)
      scoreObj.republican.score++
    }else{
      scoreObj.uncategorized.uncategorizedSources.push(allSources[i].name)
      scoreObj.uncategorized.score++
    }
  }

  scoreObj.democratic.score = Math.round((scoreObj.democratic.score / allSources.length) * 100)
  scoreObj.republican.score = Math.round((scoreObj.republican.score / allSources.length) * 100)
  scoreObj.uncategorized.score = Math.round((scoreObj.uncategorized.score / allSources.length) * 100)

  return scoreObj
}

export default calcScore;
