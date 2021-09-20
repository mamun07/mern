import {Typography,AppBar,Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {useRouter} from 'next/router'

import Link from 'next/link'

const Navbar = () => {
    const Routers = useRouter();
    const homePushHandler=()=>{
        Routers.push('/')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon onClick={homePushHandler}/>
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> MERN </Typography>

                    <Typography variant="div">
                        <Link href="/">Home </Link>
                        <Link href="/blog"> Blog </Link>
                        <Link href="/about"> About</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </>
      );
}

export default Navbar
