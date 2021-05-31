import React from 'react';
import {
  Card,
  makeStyles,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Event, Person } from '@material-ui/icons';

const ReminderCard = (props) => {
  const { reminder } = props;
  const classes = useStyle();
  return (
    <Card elevation={4} className={classes.reminderCard}>
      <CardActionArea>
        <CardMedia image={reminder.img} className={classes.img} />
        <CardContent className={classes.contentContainer}>
          <Typography variant="h3" className={classes.cardTitle}>
            {reminder.title}
          </Typography>
          <Typography className={classes.cardSubtitle}>
            {reminder.subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionsContainer}>
        <Button variant="text" color="inherit" startIcon={<Event />}>
          {`${reminder.remainingDays} days`}
        </Button>
        <AvatarGroup
          max={4}
          classes={{ avatar: classes.avatar }}
          style={{ marginLeft: 'auto' }}
        >
          {[...Array(reminder.people)].map((e, index) => (
            <Avatar key={index}>
              <Person />
            </Avatar>
          ))}
        </AvatarGroup>
      </CardActions>
    </Card>
  );
};

const useStyle = makeStyles((theme) => ({
  reminderCard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  img: {
    height: 180,
  },
  contentContainer: {
    height: 123,
  },
  actionsContainer: {
    height: 30,
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 14,
  },
  cardTitle: {
    fontSize: 25,
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#babfcb',
  },
}));

export default ReminderCard;
