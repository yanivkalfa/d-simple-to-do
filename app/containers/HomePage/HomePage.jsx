// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styled, { css } from 'styled-components';
import { ms, msr } from 'styles/helpers';
import { scaleFont, scale } from 'styles/common';

import green from '@material-ui/core/colors/green';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledIconButton = styled(IconButton)`
  margin-left:-18px;
  margin-right: 10px;
}`;

const ToDoContainer = styled.div`
 flex-grow: 1;
 padding: 20px 0;
}`;

const StyledPaper = styled(Paper)`
  padding:  ${ms(0)};
  text-align: center;
}`;

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  fabButton: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
    minHeight: 'auto'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: '20px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  checkbox: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


type Props = {
  b: string
};

const defaultState = {
  open: false,
  addNew: false,
  newValue: ''
};
class HomePage extends Component<Props> {
  props: Props;
  state = defaultState;

  addNew(addNew) {
    this.setState({ addNew,  newValue: '' });
  }

  changeNew(e) {
    this.setState({ newValue: e.target.value });
  }

  openMenu(open) {
    this.setState({ open });
  }

  render() {
    const { classes } = this.props;
    const { addNew, open, newValue } = this.state;
    return (
      <HomeContainer>
        <ToDoContainer>
          <Grid container spacing={16} justify="center">
            <Grid item md={6}>
              <StyledPaper>
                <Grid item xs={12}>
                  <AppBar position="static">
                    <Toolbar variant="dense">
                      <Typography variant="h6" color="inherit">
                        Simple D Todo
                      </Typography>
                      <div className={classes.grow} />
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                          <SearchIcon />
                        </div>
                        <InputBase
                          placeholder="Search…"
                          classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                        />
                      </div>
                      <Fab
                        onClick={() => this.addNew(true)}
                        color="secondary"
                        aria-label="Add"
                        className={classes.fabButton}
                      >
                        <AddIcon />
                      </Fab>
                      <div>
                        <IconButton
                          aria-owns={open ? 'menu-appbar' : undefined}
                          aria-haspopup="true"
                          onClick={() => this.openMenu(true)}
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={open}
                          onClose={() => this.openMenu(false)}
                        >
                          <MenuItem onClick={() => {}}>Profile</MenuItem>
                          <MenuItem onClick={() => {}}>My account</MenuItem>
                        </Menu>
                      </div>
                    </Toolbar>
                  </AppBar>
                  <List>
                    {
                      addNew
                        ?
                        (
                          <ListItem>
                            <ListItemText>
                              <TextField
                                id="standard-name"
                                label="Name"
                                value={newValue}
                                onChange={(e) => this.changeNew(e)}
                                margin="normal"
                              />
                            </ListItemText>
                            <ListItemSecondaryAction>
                              <IconButton
                                onClick={() => this.addNew(false)}
                                aria-label="Delete"
                              >
                                <DeleteIcon/>
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        )
                        : null
                    }
                    <ListItem>
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        value="checkedG"
                        classes={{
                          root: classes.checkbox,
                          checked: classes.checked,
                        }}
                      />
                      <ListItemText
                        primary="Single-line item"
                        secondary='some secondary'
                      />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        <TextField
                          id="standard-name"
                          label="Name"
                          value="adsfadsf"
                          onChange={()=>{}}
                          margin="normal"
                        />
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
              </StyledPaper>
            </Grid>
          </Grid>
        </ToDoContainer>
      </HomeContainer>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  actions: PropTypes.object,
  match: PropTypes.object
};

/*

function mapStateToProps(state, ownProps) {
  return {
    showcases: state.boards.showcase,
    isLoggedIn: state.auth.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(assign({}, boardsActions, appActions), dispatch)};
}
*/

export default compose(
  withStyles(styles),
)(HomePage);

export {HomePage};

//  export default HomePage; //connect(mapStateToProps, mapDispatchToProps)(HomePage);
//  export default withStyles(styles)(SearchAppBar);