import PropTypes from 'prop-types';
import getRandomColor from './randomColor';
import css from './Statistics.module.css';

const Statistics =({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload {title}</h2>}
            <ul className={css.list}>
                {stats.map(({id, label, percentage}) => ( 
                    <li key={id} className={css.item} style={{backgroundColor: getRandomColor()}}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired, 
        }).isRequired).isRequired
}

export default Statistics;