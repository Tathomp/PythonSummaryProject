import React, { Component, useState, useEffect } from "react";
import { Button, Grid, Typography, TextField, FormControl, IconButton, form } from '@material-ui/core'

export default class SummaryPage extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            text: "Summary"
        }
    }


    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state["text"])
    }

    handleInputChange = (event) =>
    {
        event.preventDefault()
        console.log("text chagned")
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    render(){

        const {text} = this.state;

    return (
        <Grid conatiner spacing={1}>
            <Grid item xs={12} align="center">Summarize</Grid>
            <Gird item xs={12} align="center">
            <form>
                <TextField name="text" id="outlined-basic" label="Outlined" variant="outlined"
                onChange={this.handleInputChange}/>
            </form>
            </Gird>

            <Grid item xs={12} align="center">
                <Button type="submit" onClick={this.handleSubmit}>Hi</Button>
            </Grid>
        </Grid>
    )
}}