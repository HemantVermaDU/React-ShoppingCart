import { Container,Dropdown,FormControl, Navbar,Badge } from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa"

const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" style={{ height:80}}>
        <Container>
            <Navbar.Brand>
             <a href=''>Shopping Cart</a>
            </Navbar.Brand>
            <Navbar.Text className='search'>
            <FormControl style={{ width:500}} className="m-auto" placeholder="name@example.com" />
            </Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant='success'>
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{minWidth:370}}>
                <span style={{ padding:10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
    </div>
  )
}

export default Header