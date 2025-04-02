import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css'

import {Button, Card, Row, Col} from 'react-bootstrap'

const Entry =({entryData, setChangeAmount, deleteSingleEntry, setChangeEntry}) => {
    return(
        <Card>
            <Row>
                <Col>Purpose:{entryData !== undefined && entryData.Purpose}</Col>
                <Col>amount:{entryData !== undefined && entryData.amount}</Col>
                <Col>Reason:{entryData !== undefined && entryData.Reason}</Col>
                <Col><Button onClick={()=> deleteSingleEntry(entryData._id)}>delete entry</Button></Col>
                <Col><Button onClick={()=> changeAmount()}>change amount</Button></Col>
                <Col><Button onClick={()=> changeEntry()}>change entry</Button></Col>
            </Row>
        </Card>
    )

    function changeAmount(){
        setChangeAmount(
            {
                "change": true,
                "id":entryData._id
            }
        )
    }

    function changeEntry(){
        setChangeEntry(
            {
                "change": true,
                "id":entryData._id
            }
        )
    }
}

export default Entry