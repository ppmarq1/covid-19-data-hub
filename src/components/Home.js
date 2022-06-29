import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { FaSearch } from 'react-icons/fa';
import { IoGlobeSharp } from 'react-icons/io5';
import ContinentList from './ContinentList';

const Home = () => {
  const {
    continents,
    totalData: { totalCases, totalDeaths },
  } = useSelector((state) => state.covid);

  const [list, setList] = useState(continents);
  const [searchTerm, setTerm] = useState('');
  const search = ({ target }) => {
    const { value } = target;
    setTerm(value);
    const filteredList = continents.filter((continent) => {
      return continent.continent.toLowerCase().includes(value?.toLowerCase());
    });
    if (filteredList.length > 0) {
      setList(filteredList);
    } else {
      setList(continents);
    }
  };

  useEffect(() => { setList(continents); }, [continents]);

  return (
    <>
      {list.length > 0 && (
        <>
          <div className="globeDetails">
            <IoGlobeSharp color="white" className="globe" />
            <div className="count">
              <CountUp
                delay={1}
                end={totalCases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />
              <CountUp
                delay={1}
                prefix="Total Deaths: "
                end={totalDeaths}
                separator=","
                duration={3}
              />
            </div>
          </div>
          <form className="form">
            <div className="search-bar">
              <div>
                <input
                  className="input-area"
                  type="text"
                  size={25}
                  value={searchTerm}
                  placeholder="Search"
                  onChange={search}
                />
                <FaSearch size={20} color="white" className="searchButton" />
              </div>
            </div>
          </form>
          <ContinentList continents={list} />
        </>
      )}
    </>
  );
};

export default Home;
