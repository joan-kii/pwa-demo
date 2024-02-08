import { useContext } from 'react'

import InterventionSummary from '../InterventionComponents/InterventionSummary'
import { Context } from '../../utils/context'
import { Intervention, Keyword } from '../../utils/types';

function InterventionsList() {
  const { layout, interventions, keywords }= useContext(Context)
  /* function orderByKeywords(interventions: Intervention[], keywords: Keyword[]) {
    return interventions.sort((a, b) => {
      const indexOfA = keywords.indexOf(a.keywords);
      const indexOfB = keywords.indexOf(b.keywords);
  
      // If a keyword is not found in the keywordsArray, move it to the end
      if (indexOfA === -1) return 1;
      if (indexOfB === -1) return -1;
  
      return indexOfA - indexOfB;
    });
  }
  const keywordFilteredInterventions = orderByKeywords(interventions, keywords)
  if (keywords.length > 0) console.log(keywordFilteredInterventions);
  console.log(keywords); */

  function orderByKeywords(arrayOfObjects, keywordsArray) {
    // Create a map to store the index of each keyword in the keywordsArray
    const keywordIndexMap = new Map();
    keywordsArray.forEach((keyword, index) => {
      keywordIndexMap.set(keyword, index);
    });
  
    // Sort the array of objects based on the keywords property
    arrayOfObjects.sort((a, b) => {
      // Get the index of the keywords in each object
      const indexA = keywordIndexMap.get(a.keywords);
      const indexB = keywordIndexMap.get(b.keywords);
  
      // Compare the indices and return the comparison result
      if (indexA === undefined && indexB === undefined) {
        // If neither object has keywords in the keywordsArray, maintain the original order
        return 0;
      } else if (indexA === undefined) {
        // If only object a has keywords in the keywordsArray, it should come after object b
        return 1;
      } else if (indexB === undefined) {
        // If only object b has keywords in the keywordsArray, it should come after object a
        return -1;
      } else {
        // If both objects have keywords in the keywordsArray, compare their indices
        return indexA - indexB;
      }
    });
  
    // Return the sorted array of objects
    return arrayOfObjects;
  }
  
  // Example usage
  const arrayOfObjects = [
    { id: 1, keywords: ['apple', 'banana', 'orange'] },
    { id: 2, keywords: ['banana', 'apple', 'grape'] },
    { id: 3, keywords: ['orange', 'grape', 'banana'] },
  ];
  
  const keywordsArray = ['banana', 'apple', 'orange', 'grape'];
  
  const sortedArray = orderByKeywords(arrayOfObjects, keywordsArray);
  console.log(sortedArray);
  
  
  
  const recentInterventionsList = interventions.sort((a, b) => b.fakeDate - a.fakeDate)
  const pendingInterventionsList = recentInterventionsList.filter((a) => a.pending)
  
  return (
    <div className="mb-5">
      {layout === 'recent' && recentInterventionsList.map((intervention) => {
          return <InterventionSummary {...intervention} key={intervention._id} />
        })
      }
      {layout === 'pending' && pendingInterventionsList.map((intervention) => {
          return <InterventionSummary {...intervention} key={intervention._id} />
        })
      }
    </div>
  )
}

export default InterventionsList
