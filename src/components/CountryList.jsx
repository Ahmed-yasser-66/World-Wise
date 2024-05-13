import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CounrtyItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add You first city by clicking on the city on the map!" />
    );

  const countries = cities.reduce((array, city) => {
    if (!array.map((el) => el.country).includes(city.country)) {
      return [...array, { country: city.country, emoji: city.emoji }];
    } else {
      return array;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CounrtyItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
