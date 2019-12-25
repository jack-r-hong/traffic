import React ,{ useState, useCallback }from 'react';
import { Container, Row, Col, Button , Form, Alert, InputGroup, FormControl ,Dropdown ,DropdownButton ,Card } from 'react-bootstrap';
import {useDropzone} from 'react-dropzone';
import { createLocationData } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import lrz from 'lrz';




export default function AddNewLocationDataContainer () {
    
    
    const [selectCounty, setSelectCounty] = useState('台中市');
    const [imgSrc, setImgSrc] = useState('');
    const [selectLocation, setSelectLocation] = useState('');
    let postData ={
        county : selectCounty,
        location : selectLocation,
        image : imgSrc
    }
    const dispatch = useDispatch();
    const county =['南投縣', '台中市', '彰化縣'];
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        
 
        if(acceptedFiles[0].type === 'image/jpeg' || acceptedFiles[0].type === 'image/gif' || acceptedFiles[0].type === 'image/png' ){
            reader.onloadend = function (e) {
                lrz(reader.result, {quality:0.1})
                .then(rst => {
                    
                    setImgSrc(rst.base64) 
                })  
            }            
        }else{
            alert('只接受jpg, png, gif 檔')
        }

    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const verifyPost = () => {
        if(postData.location === ''){
            alert('請輸入地點');
        }else if((postData.image === '') ){
            alert('請上傳圖片');
        }else {
            dispatch(createLocationData(postData))
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
                    <FormControl aria-describedby="basic-addon1" placeholder="請輸入路名" onChange={(e) => {setSelectLocation(e.target.value)}} value={selectLocation}/>

                </InputGroup>


                <Card  {...getRootProps()}>
                    
                    <Card.Img variant="top" src={imgSrc} />
                    <input {...getInputProps()} />
                    {
                        imgSrc !== '' ?
                        '' :
                        <p>上傳現場照片</p>
                    }
                </Card >    
                <Button variant="primary" className='mt-3' onClick={() => {verifyPost();  console.log(postData)}}>確認送出</Button>            
     



            </Container>


        </div>
    );
}