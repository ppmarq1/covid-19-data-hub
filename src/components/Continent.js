import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import images from '../images/images';

const Continent = ({ continent: { continent, cases } }) => (
  <Link
    to={`/${continent}`}
    data-testid="continentItem"
    className="continentElement"
  >
    <BsArrowRightCircle size={30} className="arrowButton" />
    <img
      src={images[continent]}
      alt="continent map"
      className="continentImage"
    />
    <div className="continentText">
      <h4 className="">
        <span className="">{`${continent}`}</span>
      </h4>
      <span className="">{cases.toLocaleString()}</span>
    </div>
  </Link>
);

Continent.propTypes = {
  continent: PropTypes.shape({
    continent: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
  }).isRequired,
};

export default Continent;
