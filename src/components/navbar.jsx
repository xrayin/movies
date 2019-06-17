import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Movies</Link>
                    </li>
                    <li>
                        <Link to="/customers">Customers</Link>
                    </li>
                    <li>
                        <Link to="/rentals">Rentals</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;