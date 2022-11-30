import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem, CssBaseline } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const NavBarContractor = ({ setCurrentUser }) => {

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const createJobClick = () => {
    setAnchorElNav(null)
    navigate('/create-job')
  }

  const myJobsClick = () => {
    setAnchorElNav(null)
    navigate('/my-jobs')
  }

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
        navigate('/')
      }
    })
  }

  return (
    <AppBar position="static">
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              mb: .3,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Freenote
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={createJobClick}>
                  <Typography textAlign="center">Create Job</Typography>
                </MenuItem>
                <MenuItem onClick={myJobsClick}>
                  <Typography textAlign="center">My Jobs</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Freenote
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={createJobClick}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
              >
                Create Job
              </Button>
              <Button
                onClick={myJobsClick}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
              >
                My Jobs
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={() => navigate('/contractor-profile')} textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={handleLogout} textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>  
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBarContractor