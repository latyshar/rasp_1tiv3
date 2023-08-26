import logo from './logo.svg';
import './App.css';
import './Table.css';
import React from 'react'; 
import TimeDisplay from './time.js'; 
import Check from './check';

  
  
const App = () => { 
  return ( 
  <div class="center"> 
  <h1>Расписание 1-ТИВ-3</h1> 
  <Check/>
  <TimeDisplay /> 
 

  <div id="timeText1" style={{ visibility: 'hidden' }}>



  </div>

      <div id="timeText2" style={{ visibility: 'hidden' }}>



      </div>

          <div id="timeText3" style={{ visibility: 'hidden' }}>


          </div>

              <div id="timeText4" style={{ visibility: 'hidden' }}>



              </div>

                  <div id="timeText5" style={{ visibility: 'hidden' }}>




                  </div>

                      <div id="timeText6" class='table-container' style={{ visibility: 'hidden' }}> 
                      <table>

                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Account">1</td>
                            <td data-label="Due Date">Информационные технологии</td>
                            <td data-label="Amount">224</td>
                            <td data-label="Period">10:05 - 11:30</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="Account">2</td>
                            <td data-label="Due Date">Информационные технологии</td>
                            <td data-label="Amount">224</td>
                            <td data-label="Period">11:40 - 13:05</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="Account">3</td>
                            <td data-label="Due Date">История медиадизайна</td>
                            <td data-label="Amount">107</td>
                            <td data-label="Period">13:45 - 15:10</td>
                          </tr>
                      
                        </tbody>
                      </table>
                      
                      </div>

                          <div id="timeText7" style={{ visibility: 'hidden' }}>
              <h1>ОТДЫХАЕМ</h1>;


                          </div> 
                          </div> 
  ); 
  }; 
  
  export default App; 
