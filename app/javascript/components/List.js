import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Popup from "reactjs-popup";
import axios from 'axios';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        Width: 500,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    root: {
        width: '100%',
        maxWidth: 1000,
    },
    pos: {
        marginBottom: 12,
    },
    chip: {
        marginRight: theme.spacing(1),
    },
    section1: {
        margin: theme.spacing(5, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
});

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: "",
            projects: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name, language, stars, login, image_url) {
        axios.post("/api/v1/repositories", {
            repository: {
                name: name,
                login_name: login,
                stars: stars,
                language: language,
                image_url: image_url
            }
        }, { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                console.log("created")
            }
        }).catch(error => {
            console.log("registration error", error);
        });
    }

    render() {
        const { classes } = this.props;
        if (this.props.posts !== undefined) {
            return this.props.posts.map((post) => {
                return (
                    <div className='widget'>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            style={{ minHeight: '10vh' }}
                        >
                            <Grid item xs={6}>
                                <div className={classes.root} >
                                    <div className={classes.section1}>
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <img
                                                    src={post.owner.avatar_url}
                                                    alt="new"
                                                    width="150" height="150"
                                                />
                                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                    {post.full_name}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Divider variant="middle" />
                                        <div className={classes.section2}>
                                            <Popup
                                                trigger={open => (
                                                    <Button className="button" variant="outlined" style={{ color: '#ef0044' }}>Detalhes</Button>
                                                )}
                                                position="right center"
                                                closeOnDocumentClick
                                            >
                                                <ul>
                                                    <li> forks: {post.forks}</li>
                                                    <li> stars: {post.stargazers_count} </li>
                                                    <li> language: {post.language} </li>
                                                </ul>
                                            </Popup>

                                            <Button color="primary" variant="outlined" style={{ color: '#ef0044' }} onClick={e => this.handleClick(post.full_name, post.language, post.stargazers_count, post.owner.login, post.owner.avatar_url)}>
                                                Salvar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>);
            });
        } else {
            return (
                <div className='widget'>
                </div>
            )
        }
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);