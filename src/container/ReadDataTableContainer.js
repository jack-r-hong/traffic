import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector, useDispatch } from 'react-redux';


export default function ReadDataTableContainer (props) {
    let holidayCarTraffic = useSelector(state => state.readDataLocationReducers.holidayCarTraffic);
    let holidayMotorcycleTraffic = useSelector(state => state.readDataLocationReducers.holidayMotorcycleTraffic);
    let weekdayCarTraffic = useSelector(state => state.readDataLocationReducers.weekdayCarTraffic);
    let weekdayMotorcycleTraffic = useSelector(state => state.readDataLocationReducers.weekdayMotorcycleTraffic);

    

    const options = {
        
            chart: {
              type: 'line'
            },
            title: {
              text: `${props.selectLocation === '選擇路口'? '': props.selectCounty} ${props.selectLocation === '選擇路口'? '': props.selectLocation}`
            },
            subtitle: {
              text: `汽機車流量表`
            },
            xAxis: {
              categories: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00' ,'19:00', '20:00']
            },
            yAxis: {
              title: {
                text: '流量'
              }
            },
            plotOptions: {
              line: {
                dataLabels: {
                  enabled: true
                },
                enableMouseTracking: false
              }
            },
            
            series: [{
              name: '假日汽車',
              data: holidayCarTraffic
            }, {
              name: '假日機車',
              data: holidayMotorcycleTraffic
            },
            {
                name: '非假日汽車',
                data: weekdayCarTraffic
            },    
            {
                name: '非假日機車',
                data: weekdayMotorcycleTraffic
            },                    
            
            ]
          }

    return(

        <div>  

            
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            


        </div>
    );
}