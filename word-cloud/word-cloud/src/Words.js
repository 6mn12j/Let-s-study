import React from 'react';
import { withStyles } from '@material-ui/styles';
import {
    Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle,
    Fab,  Grid, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme =>({
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    }
});

const databaseURL = "https://word-cloud-57925-default-rtdb.firebaseio.com";

class Words extends React.Component {
    constructor() {
        super();
        this.state = {
            words: {},
            dialog: false,
            word: '',
            weight: ''
        };
    }
    _get() {
        fetch (`${databaseURL}/words.json`).then(res=> {
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(words=>(this.setState({words})));
    }
    _post(word){
        return fetch(`${databaseURL}/words.json`, {
            method: 'POST',
            body: JSON.stringify(word)
        }).then(res => {
            if(res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data =>{
            let nextState = this.state.words;
            nextState[data.name] = word;
            this.setState({words: nextState});
        });
    }
    _delete(id){
        return fetch(`${databaseURL}/words/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if (res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextState = this.state.words;
            delete nextState[id];
            this.setState({words:nextState});
        })
    }
    handleDialogToggle=()=> this.setState({
        dialog: !this.state.dialog
    })
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleSubmit = () => {
        const word = {
            word: this.state.word,
            weight: this.state.weight
        }
        this.handleDialogToggle();
        if (!word.word && word.weight)
            return ;
        this._post(word);
    }
    handleDelete = (id) =>{
        this._delete(id);
    }
    componentDidMount() {
        this._get();
    }
    render(){
        const {classes} = this.props;
        const {words} = this.state;
        return (
            <div>
                {Object.keys(words).map(id=>{
                    const word = words[id];
                    return (
                        <div key={id}>
                                <Card>
                                <CardContent>
                                    
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>
                                                가중치:{word.weight}
                                            </Typography>
                                            <Typography>
                                                {word.word}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button variant="contained" color="primary" onClick={() => this.handleDelete(id)}>삭제</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
                <Fab color="primary" className={classes.fab} onClick={this.handleDialogToggle}>
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.dialog} onClose={this.handleDialogToggle}>
                    <DialogTitle>단어 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="단어" type="text" name="word" value={this.state.word} onChange={this.handleValueChange} /><br />
                        <TextField label="가중치" type="text" name="weight" value={this.state.weight} onChange={this.handleValueChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleDialogToggle}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}   

export default withStyles(styles)(Words);