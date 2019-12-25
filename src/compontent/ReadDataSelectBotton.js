import React ,{ useState }from 'react';
import { Container, Row, Col , Alert, DropdownButton, Dropdown } from 'react-bootstrap';


export default function ReadDataSelectBotton (props) {
    const [propsData, setPropsData] = useState(props.data[0]);
    
    return(

        <div>  

            
                <DropdownButton
                
                variant="outline-secondary"
                title={propsData}
                id="input-group-dropdown-2"
                >
                    {                      
                        props.data.map((item, i) => {
                            
                            return(
                                <Dropdown.Item onClick={() => setPropsData(item)} key={i}>{item}</Dropdown.Item> 
                            )
                            
                        }) 
                    }
                    

                </DropdownButton>                
                
            


        </div>
    );
}

