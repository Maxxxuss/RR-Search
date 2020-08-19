/** @flow */

import { actions } from '../../redux/reducers/resources'
import { dataSearchText, filteredIdArray, filteredIdList, immutableDataSearchText, immutableMap, map, notesMap, filteredIdNotesArray, notesDataSearchText} from '../../redux/selectors/ressource'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import CardWrapper from './searchWebsite/components/Card/CardWrapper'
import Card  from './searchWebsite/components/Card/Card'

// import Footer from './components/Footer'
import Immutable from 'immutable'
import React from 'react'
import Widget from './searchWebsite/components/Widget/Widget'
// import Highlighter from 'react-highlight-words'
import styles from './Application.css'
import PropTypes from 'prop-types';
import ResControls from '../../containers/resControlls'



Application.propTypes = {
  dataSearchText: PropTypes.string.isRequired,
  generateData: PropTypes.func.isRequired,
  generateImmutableData: PropTypes.func.isRequired,
  filteredIdArray: PropTypes.array.isRequired,
  filteredIdList: PropTypes.instanceOf(Immutable.List).isRequired,
  immutableDataSearchText: PropTypes.string.isRequired,
  immutableMap: PropTypes.any.isRequired,
  map: PropTypes.object.isRequired,
  notesMap: PropTypes.object.isRequired,
  searchData: PropTypes.func.isRequired,
  searchImmutableData: PropTypes.func.isRequired, 
  searchNotes: PropTypes.func.isRequired,
  notesDataSearchText: PropTypes.string.isRequired,
  filteredIdNotesArray: PropTypes.array.isRequired,
  generateNotesData: PropTypes.func.isRequired,
  notesContent: PropTypes.string.isRequired,
  addNotesData: PropTypes.func.isRequired,


}
export function Application ({
  dataSearchText,
  generateData,
  generateImmutableData,
  filteredIdArray,
  filteredIdList,
  immutableDataSearchText,
  immutableMap,
  map,
  notesMap,
  searchData,
  searchImmutableData,
  searchNotes,
  notesDataSearchText, 
  filteredIdNotesArray, 
  generateNotesData,
  notesContent, 
  addNotesData

})




{
  return (
    <div>
      <CardWrapper>
        <Card>
          <p>
            This test harness mimics what might happen in a real production app.
            The buttons below generate fake data.
            redux-search then automatically indexes that data based on the way the store was configured.
            At that point you can search the data using actions and selectors exported by redux-search.
            (<a href='https://github.com/bvaughn/redux-search/tree/master/website'>View the source</a>.)
          </p>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card>
          <Widget
            generateData={generateImmutableData}
            recordIds={filteredIdList}
            recordsMap={immutableMap}
            rowRenderer={
              index => {
                const contact = immutableMap.get(filteredIdList.get(index))
                return (
                  <div
                    key={index}
                    className={styles.Row}
                  >
                    {/* <Highlighter
                      highlightClassName={styles.Highlight}
                      searchWords={immutableDataSearchText.split(/\s+/)}
                      textToHighlight={`${contact.name}, ${contact.title}`}
                    /> */}
                  </div>
                )
              }
            }
            searchData={searchImmutableData}
            title={'Immutable List of Maps'}
          />
        </Card>
        <Card>
          <Widget
            generateData={generateData}
            recordIds={filteredIdArray}
            recordsMap={map}
            rowRenderer={
              index => {
                const contact = map[filteredIdArray[index]]
                return (
                  <div
                    key={index}
                    className={styles.Row}
                  >
                    {/* <Highlighter
                      highlightClassName={styles.Highlight}
                      searchWords={dataSearchText.split(/\s+/)}
                      textToHighlight={`${contact.name}, ${contact.title}`}
                    /> */}
                  </div>
                )
              }
            }
            searchData={searchData}
            title={'Array of Objects'}
          />
        </Card>
              <Card>
          <Widget
            generateData={generateNotesData}
            recordIds={filteredIdNotesArray}
            recordsMap={notesMap}
            rowRenderer={
              index => {
                const contact = notesMap[filteredIdNotesArray[index]]
                return (
                  <div
                    key={index}
                    className={styles.Row}
                  >
                    
                    {/* <Highlighter
                      highlightClassName={styles.Highlight}
                      searchWords={dataSearchText.split(/\s+/)}
                      textToHighlight={`${contact.name}, ${contact.title}`}
                    /> */}
                  </div>  
      
                )
              }
          
            }
            searchData={searchNotes}
            title={'Notes of Objects'}
          />
        </Card>
        



      </CardWrapper>
    </div>
  )
}

const selectors = createSelector(
  [dataSearchText, filteredIdArray, filteredIdList, immutableDataSearchText, immutableMap, map, notesMap, notesDataSearchText, filteredIdNotesArray],
  (dataSearchText, filteredIdArray, filteredIdList, immutableDataSearchText, immutableMap, map, notesMap, notesDataSearchText, filteredIdNotesArray) => ({
    dataSearchText,
    filteredIdArray,
    filteredIdList,
    immutableDataSearchText,
    immutableMap,
    map,
    notesMap, 
    filteredIdNotesArray,
    notesDataSearchText
  })
)

export default connect(selectors, actions)(Application)
