import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <li className="mr-10" ><a href={route.path}></a>{route.name}</li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;