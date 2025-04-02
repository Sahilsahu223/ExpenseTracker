import React, {useState, useEffect} from 'react';

import axios from "axios";

import {Button, Form, Container, Modal} from 'react-bootstrap'

import Entry from './single-entry.component';

const Entries =() =>{

    const [entries, setEntries] = useState([])
    const [refreshData, setRefreshData] = useState(false)
    const [changeEntry, setChangeEntry] = useState({"change": false, "id": 0})
    const [changeAmount, setChangeAmount] = useState({"change": false, "id": 0})
    const [newAmount, setNewAmount] = useState("")
    const [addNewEntry, setAddNewEntry] = useState(false)
    const [newEntry, setNewEntry] = useState({"Purpose":"", amount:0, "Reason":""})

    useEffect(() => {
        getAllEntries();
    }, [])

    if(refreshData){
        setRefreshData(false);
        getAllEntries();
    }

    return(
        <div>
            <Container>
        <Button onClick={() => setAddNewEntry(true)}>Track today's Expenses</Button>
            </Container>
            <Container>
        {entries != null && entries.map((entry, i) =>(
            <Entry entryData={entry} deleteSingleEntry={deleteSingleEntry} setChangeAmount={setChangeAmount} setChangeEntry={setChangeEntry} />
        ))}
            </Container>

            <Modal show={addNewEntry} onHide={() => setAddNewEntry(false)} centred>
            <Modal.Header closeButton>
            <Modal.Title>Add Expense Entry</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group>
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control onChange={(event) => {newEntry.Purpose = event.target.value}}></Form.Control>
                    <Form.Label>amount</Form.Label>
                    <Form.Control type="number" onChange={(event) => {newEntry.amount = event.target.value}}></Form.Control>
                    <Form.Label>Reason</Form.Label>
                    <Form.Control onChange={(event) => {newEntry.Reason = event.target.value}}></Form.Control>
                </Form.Group>
                <Button onClick={() => addSingleEntry()}>Add</Button>
                <Button onClick={()=> setAddNewEntry(false)}>Cancel</Button>
            </Modal.Body>
            </Modal>

            <Modal show={changeAmount.change} onHide={() => setChangeAmount({"change": false, "id":0})} centred>
            <Modal.Header closeButton>
                <Modal.Title>Change Ingredients</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group>
                    <Form.Label>new ingredients</Form.Label>
                    <Form.Control onChange={(event) => {setNewAmount(event.target.value)}}></Form.Control>
                </Form.Group>
                <Button onClick={() => changeAmountForEntry()}>Change</Button>
                <Button onClick={() => setChangeAmount({"change": false, "id":0})}>Cancel</Button>
            </Modal.Body>
            </Modal>

            <Modal show={changeEntry.change} onHide={() => setChangeEntry({"change": false, "id":0})} centred>
            <Modal.Header closeButton>
                <Modal.Title>Change Entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control onChange={(event) => {newEntry.Purpose = event.target.value}}></Form.Control>
                    <Form.Label>amount</Form.Label>
                    <Form.Control type="number" onChange={(event) => {newEntry.amount = event.target.value}}></Form.Control>
                    <Form.Label>Reason</Form.Label>
                    <Form.Control onChange={(event) => {newEntry.Reason = event.target.value}}></Form.Control>
                    
                </Form.Group>
                <Button onClick={() => changeSingleEntry()}>Change</Button>
                <Button onClick={() => setChangeEntry({"change": false, "id":0})}>Cancel</Button>
            </Modal.Body>
        </Modal>
        </div> 
    );

    function changeAmountForEntry(){
        changeAmount.change = false
        var url = "http://localhost:8000/amount/update/" + changeAmount.id
        axios.put(url, {
            "amount": newAmount
        }).then(response => {
            console.log(response.status)
            if(response.status == 200 ){
                setRefreshData(true)
            }
        })
    }

    function changeSingleEntry(){
        changeEntry.change = false;
        var url = "http://localhost:8000/entry/update/" + changeEntry.id
        axios.put(url, newEntry)
        .then(response =>{
            if(response.status == 200){
                setRefreshData(true)
            }
        })
    }

    function addSingleEntry(){
        setAddNewEntry(false)
        var url = "http://localhost:8000/entry/create"
        axios.post(url, {
            "amount":newEntry.amount,
            "Purpose": newEntry.Purpose,
            "Reason": newEntry.Reason,
        }).then(response => {
            if(response.status == 200){
                setRefreshData(true)
            }
        })
    }
    
    function deleteSingleEntry(id){
        var url = "http://localhost:8000/entry/delete/" + id
        axios.delete(url, {
    
        }).then(response => {
            if (response.status == 200){
                setRefreshData(true)
            }
        })
    }
    
    function getAllEntries(){
        var url = "http://localhost:8000/entries"
        axios.get(url, {
            reponseType: 'json'
        }).then(response => {
            if(response.status == 200){
                setEntries(response.data)
            }
        })
    }
}

export default Entries
