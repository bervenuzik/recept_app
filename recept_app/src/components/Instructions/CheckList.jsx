import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function CheckList({children , list}) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
    <h3>{children}</h3>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {list.map((value , index) => {
          const labelId = `checkbox-list-label-${value}`;
          
          return (
              <ListItem
              key={value}
              secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                
              </IconButton>
            }
            disablePadding
            >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  />
              </ListItemIcon>
              <ListItemText id={labelId} primary={(index+1)+". "+value} />
            </ListItemButton>
          </ListItem>
        );
    })}
    </List>
    </>
  );
}