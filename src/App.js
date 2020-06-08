import React from 'react';
import clsx from 'clsx';
import {
  Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem,
  InputBase, Badge, ButtonGroup, Button, Grid, Paper, ListItemIcon, ListItemText, Card,
  CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Fade, Popper, Tabs, Tab
} from '@material-ui/core';
import {
  AccountCircle,
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  Add as AddIcon,
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  CreditCard as CreditCardIcon,
} from '@material-ui/icons';
import { fade, makeStyles, useTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import './App.css';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#094e87"
    },
    secondary: {
      main: "#094e87"
    },
  },
  status: {
    danger: 'orange',
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [anchorPopEl, setAnchorPopEl] = React.useState(null);
  const [openPop, setOpenPop] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const [alignment, setAlignment] = React.useState('new');

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function createData(mon, tues, wed, thus, fri, sat, sun) {
    return { mon, tues, wed, thus, fri, sat, sun };
  }

  const rows = [
    createData('.', '', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
    createData(',', '', '', '', '', '', '', ''),
  ];

  const handleClick = (newPlacement) => (event) => {
    setAnchorPopEl(event.currentTarget);
    setOpenPop((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Sydney Clinic
            </Typography>
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
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><AssessmentIcon /></ListItemIcon>
            </ListItem>
            <ListItem button >
              <ListItemIcon><DateRangeIcon /></ListItemIcon>
            </ListItem>
            <ListItem button >
              <ListItemIcon><PeopleAltIcon /></ListItemIcon>
            </ListItem>
            <ListItem button >
              <ListItemIcon><EmailIcon /></ListItemIcon>
            </ListItem>
            <ListItem button >
              <ListItemIcon><DescriptionIcon /></ListItemIcon>
            </ListItem>
            <ListItem button >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
            </ListItem>
          </List>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <main className={classes.content}>
          <Popper open={openPop} anchorEl={anchorPopEl} placement={placement} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className="modal">
                  <Typography className={classes.typography} variant="h6" component="h6">Peter Meyers</Typography>
                  <small>32Yrs • 0412345678</small>
                  <Paper square>
                    <Tabs
                      className="tab"
                      value={value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleChange}
                      aria-label="tabs example"
                    >
                      <Tab label="Appointment" />
                      <Tab label="Consultation" />
                      <Tab label="Invoice" />
                    </Tabs>
                  </Paper>
                  <Divider />
                  <p className="p">PreOp Consult</p>
                  <smal className="small">Linked to 3 appts of Operation</smal>
                  <Divider />
                  <p className="p">Dr Sherry White</p>
                  <smal className="small">Linked to 3 appts of Operation</smal>
                  <Divider />
                  <p className="p">Sydney Clinic • Tulip</p>
                  <smal className="small">Linked to 3 appts of Operation</smal>
                  <Divider />
                  <p className="p">08 Mar • 10:30 AM • 15mins </p>
                  <smal className="small">Linked to 3 appts of Operation</smal>
                  <Divider />
                  <p className="p">A shot of painkiller was given to patient before consultation</p>
                  <Divider />
                  <small>
                    Reminder sent to patient on 23 Jan 9:13AM on 0412345678 & peter.meyers@gmail.com
                  </small>
                  <Divider />
                  <Button size="small" variant="contained" color="primary">
                    <EventAvailableIcon /> Confirm
                  </Button>{" "}
                  <Button size="small" variant="contained" >
                    <CheckCircleOutlineIcon /> Checkin
                  </Button>{" "}
                  <Button size="small" variant="contained">
                    <LocalHospitalIcon /> Send to Doc
                  </Button>
                </Paper>
              </Fade>
            )}
          </Popper>
          <div className={classes.toolbar} />
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="new" aria-label="new"><AddIcon /> New</ToggleButton>
            <ToggleButton>Waitlist</ToggleButton>
            <ToggleButton>Filters</ToggleButton>
            <ToggleButton>Today</ToggleButton>
            <ToggleButton>08 Mar 2020</ToggleButton>
            <ToggleButton>List</ToggleButton>
            <ToggleButton>More Options</ToggleButton>
          </ToggleButtonGroup>
          <br />
          <br />
          <Typography variant="h6" component="h6" align="center">
            Dr Sherry White{" "}
            <ToggleButtonGroup
              size="small"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="new" aria-label="new">Week</ToggleButton>
              <ToggleButton>Month</ToggleButton>
            </ToggleButtonGroup>
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Paper className={classes.paper} style={{ color: '#999999', padding: "0.5em" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  &emsp;<span className="dateNum">08</span> Monday
                </Typography>
              </Paper>
              <div onClick={handleClick('right')} className="task orange-task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
              <div onClick={handleClick('right')} className="task green-task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
              <div onClick={handleClick('right')} className="task green-task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
              <div onClick={handleClick('right')} className="task red-task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
              <div onClick={handleClick('right')} className="task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper} style={{ color: '#999999', padding: "0.5em" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  &emsp;<span className="dateNum">09</span> Tuesday
                </Typography>
              </Paper>
              <div onClick={handleClick('right')} className="task green-task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
              <div onClick={handleClick('right')} className="task green-task">
                <Grid container wrap="nowrap" >
                  <Grid item xs={3}>
                    <CreditCardIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <p style={{ color: "white" }} className="p">Ashley Simons</p>
                    <small>CARDIAC SURGERY</small>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper} style={{ color: '#999999', padding: "0.5em" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  &emsp;<span className="dateNum">10</span>  Wednesday
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper} style={{ color: '#999999', padding: "0.5em" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  &emsp;<span className="dateNum">11</span> Thusday
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper} style={{ color: '#999999', padding: "0.5em" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  &emsp;<span className="dateNum">12</span> Friday
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper} style={{ color: '#999999', padding: "0.5em" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  &emsp;<span className="dateNum">12</span> Saturday
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </ThemeProvider>
    </div>
  );
}
