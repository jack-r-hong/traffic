import React ,{ useState, useEffect }  from 'react';
import { Container, Row, Col, Button , Form, Alert, InputGroup, FormControl ,Dropdown ,DropdownButton ,Card } from 'react-bootstrap';
import { createTrafficData } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import {findCountyData} from '../actions/index';




export default function ReadDataContainer () {
    const [isHoliday, setIsHoliday] = useState(false);
    const [selectTime, setSelectTime] = useState('6');
    const [selectCounty, setSelectCounty] = useState('台中市');
    const [selectLocation, setSelectLocation] = useState('選擇路口');
    const [carTraffic, setCarTraffic] = useState('');
    const [motorcycleTraffic, setMotorcycleTraffic] = useState('');
    const dispatch = useDispatch();
    const county =['南投縣', '台中市', '彰化縣'];
    const location =['sss']
    const time = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let postData = {
        county : selectCounty,
        location : selectLocation,
        hour : selectTime,
        isHoliday : isHoliday? 1: 0,
        carTraffic : carTraffic,
        motorcycleTraffic : motorcycleTraffic
    }
    let locat = useSelector(state => state.addDataReducers.location)

    useEffect(() => {
        dispatch(findCountyData({county:'台中市'}));
      }, []);
    useEffect(() => {
        dispatch(findCountyData({county:selectCounty}));
        setSelectLocation('選擇路口')
    }, [selectCounty]);
      
    
    const verifyPost = (conti) => {
        if(postData.location === '選擇路口'){
            alert('請選擇路口');
        }else if((postData.carTraffic === '') && (postData.motorcycleTraffic === '')){
            alert('請輸入流量');
        }else if(conti){
           dispatch(createTrafficData(postData)) 
           if(selectTime<20){
             setSelectTime(parseInt(selectTime) +1);  
           }
           
        }

        
        
    }

      
      

    

    return(

        <div>  

            <Container className='mt-5 py-5'>
                <InputGroup className="mb-3">
                    <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title={selectCounty}
                    id="input-group-dropdown-1"
                    >
                    {
                        county.map(item => {
                            return(
                                <Dropdown.Item key={item} onClick={() => {setSelectCounty(item)}}>{item}</Dropdown.Item>
                            );
                        })
                    }

                    </DropdownButton>
                    
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title=
                        {selectLocation}
                        id="input-group-dropdown-1"
                        >
                        {
                            locat? 
                            locat.map((item, i) => {
                                return(
                                    <Dropdown.Item key={i} onClick={() => {setSelectLocation(item)}}>{item}</Dropdown.Item>
                                );
                            })
                            :
                            ''
                        }

                        </DropdownButton>  
                                           
                    


                </InputGroup>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label={isHoliday? '假日' : '非假日'}
                    onChange={() => {setIsHoliday(!isHoliday);}}
                />  
                <InputGroup className="mb-3">
                    <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title={`${selectTime}  點`}
                    id="input-group-dropdown-1"
                    >
                        {
                            time.map(item => {
                                return(
                                <Dropdown.Item href="#" key={item} onClick={() => setSelectTime(item)}>{item} 點</Dropdown.Item>
                                )
                            })
                        }

                    
                    
                    </DropdownButton>
                   
                        
                    <Form.Control type="number" placeholder="汽車數量" onChange={ e => setCarTraffic(e.target.value)} value={carTraffic} />
                    <Form.Control type="number" placeholder="機車數量" onChange={ e => setMotorcycleTraffic(e.target.value)} value={motorcycleTraffic} />


                </InputGroup>   

                <Button variant="primary" className='mt-3' onClick={() => verifyPost(true) }>繼續輸入</Button>            
     



            </Container>


        </div>
    );
}