import style from './InputAll.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
const InputSearch = (props) => {
  const router = useRouter();
  const [search, setSeach] = useState(router.query.search || '');
  return (
    <div className={`relative ${props.styleContainer}`}>
      {props.query === false && (
        <input
          className={`${style['input-search']} ${props.styleInput}`}
          onChange={props.onChange ? props.onChange : (e) => setSeach(e.target.value)}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.value ? props.value : search}
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
          onKeyDown={(e) =>
            e.key === 'Enter'
              ? router.push(
                  {
                    pathname: '/search',
                    query: {
                      search,
                      location: router.query.location || '',
                      type: router.query.type || '',
                    },
                  },
                  undefined,
                  { shallow: true }
                )
              : ''
          }
        />
      )}
      {props.query === true && (
        <input
          className={`${style['input-search']} ${props.styleInput}`}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
        />
      )}
      <img
        onClick={() => router.push(`/search?search=${search}`)}
        className="absolute top-2 right-4 h-6"
        src="/assets/icon/search.png"
        alt="icon-search"
      />
      {props.children}
    </div>
  );
};

InputSearch.defaultProps = {
  query: false,
};

export default InputSearch;
