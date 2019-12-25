import React ,{useState, useEffect}from 'react';
import { Container, Row, Col, Button , Form, Alert, DropdownButton, Dropdown,Card } from 'react-bootstrap';
import ReadDataTableContainer from './ReadDataTableContainer';
import ReadDataSelectBotton from '../compontent/ReadDataSelectBotton';
import { useSelector, useDispatch } from 'react-redux';
import {findCountyDataRead, findLocationDataRead} from '../actions/index';



export default function ReadDataContainer () {

    const [isHoliday, setIsHoliday] = useState(false);
    const time = ['6點','7點','8點','9點','10點','11點','12點','13點','14點','15點','16點','17點','18點','19點','20點'];
    const [selectCounty, setSelectCounty] = useState('台中市')
    const [selectLocation, setSelectLocation] = useState('文心路')
    const county =['南投縣', '台中市', '彰化縣'];
     
    
    
    

    const dispatch = useDispatch();
    let locat = useSelector(state => state.readDataReducers.location)
    
    let image = useSelector(state => state.readDataLocationReducers.image)



    
    useEffect(() => {
        dispatch(findCountyDataRead({county:'台中市'}))
        dispatch(findLocationDataRead({county:'台中市', location:'文心路'}))
    }, []);

    useEffect(() => {
        dispatch(findCountyDataRead({county:selectCounty}))
        if(locat !== undefined){
            setSelectLocation('選擇路口')
        }
        
    }, [selectCounty]);    

    useEffect(() => {
        
        dispatch(findLocationDataRead({county:selectCounty, location:selectLocation}))
    }, [selectLocation]);      

    return(

        <div>  

            <Container className='mt-5 py-5'>
                <Row>
                    <Col>
                        <DropdownButton
                        
                            variant="outline-secondary"
                            title={selectCounty}
                            id="input-group-dropdown-2"
                            >
                                {                      
                                    county.map((item, i) => {
                                        
                                        return(
                                            <Dropdown.Item onClick={() => setSelectCounty(item)} key={i}>{item}</Dropdown.Item> 
                                        )
                                        
                                    }) 
                                }
                                

                        </DropdownButton>  
                    </Col>
                    <Col>
                        {locat?
                            <DropdownButton
                            
                                variant="outline-secondary"
                                title={selectLocation}
                                id="input-group-dropdown-2"
                                >
                                    {                      
                                        locat.map((item, i) => {
                                            
                                            return(
                                                <Dropdown.Item onClick={() => setSelectLocation(item)} key={i}>{item}</Dropdown.Item> 
                                            )
                                            
                                        }) 
                                    }
                                    

                            </DropdownButton>  
                            :
                            ''
                        }
                       
                    </Col> 
                                           
                </Row>
                
                
                <ReadDataTableContainer 
                    selectLocation={selectLocation}
                    selectCounty={selectCounty}
                
                />
                <Row>
                    <Col>
                        現場照片:                  
                    </Col>
                    <Col>
              
                    </Col>  
                    <Col>
               
                    </Col>                                      
                </Row>
                <Row>
                    <Col>
                        {
                            image?
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={image} />
                                </Card>     
                            :
                            ''                
                        }

                    </Col>
                </Row>


            </Container>


        </div>
    );
}