import React from 'react'
import { useState } from 'react';

import { Button, Card, CardContent, Divider, Fab, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material'


// ICON
import Icon from 'src/@core/components/icon'
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Form from './Form';
import useSearch from '../hooks/useSearch';

const TalentPoolLeft = ({ onSearch }) => {
  const [active, setActive] = useState("")
  const [searchTerm, setSearchTerm] = useState('');
  const { filteredData, searchText, setSearchText } = useSearch();

  console.log(searchText)

  const handleSearch = () => {
    setSearchText(searchTerm);
  };

  return (
    <div>
      <Card sx={{ height: 600 }}>
        <CardContent sx={{ mt: 4, alignItems: 'center', justifyItems: 'center' }}>
          <input
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder='Search...'

            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </CardContent>

        <Divider />

        <Grid item xs={12} container >
          <Grid item xs={7} md={7} sx={{ ml: 4, mt: 1 }}>
            <Icon sx={{ fontSize: 40 }} icon="ri:align-left" />
          </Grid>
          <Button xs={2} sx={{ alignItems: 'flex-end' }} variant='contained' onClick={handleSearch}>search</Button>
        </Grid>

        <Divider />

        <List sx={{ p: 3 }}>

          <ListItemButton onClick={() => setActive("NewOrder")}>
            <ListItemIcon>
              <AddToPhotosIcon />
            </ListItemIcon>
            <ListItemText primary="New Order" />
          </ListItemButton>
        </List>
        <Divider />

        <List sx={{ p: 3 }}>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Active" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Archied" />
          </ListItemButton>
        </List>
        <Divider />

        <List sx={{ p: 3 }}>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkAddIcon />
            </ListItemIcon>
            <ListItemText primary="Reorder" />
          </ListItemButton>
        </List>

        <Divider />

      </Card>
    </div>
  )
}

export default TalentPoolLeft
