import React, { useEffect } from "react";
import { useState } from "react";
import _ from 'lodash';
import { fetchData } from '../actions/SearchData';
import CardList from "./CardList";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

function SearchBar(props) {

  // const { onSearch } = props;
  //   const [searchText, setSearchText] = useState('')

  //   const handleInput = (e) => {
  //     const text = e.target.value
  //     setSearchText(text)
  //   }

  // const handleEnterKeyPressed = (e) => {
  //   if (e.key === 'Enter') {
  //     onSearch(query)
  //   }
  // }

  //   return (
  //     <div>
  //       <div className="control"> 
  //         <input
  //           className="input"
  //           onChange={handleInput}
  //           onKeyPress={handleEnterKeyPressed}
  //           type="text"
  //           value={searchText}
  //           placeholder="Search your movies"
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState({});
  const [dataList, setDataList] = useState([]);
  const [errorMssg, setErrorMssg] = useState('');
  const [movies, setMovies] = useState([]);

  const onChange = ({ target: { value } }) => {
    setQuery(value);
    const debounce = function (sendQuery, d) {
      let timer;
      return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          sendQuery.apply(context, arguments);
        }, d);
      }
    }

    const search = debounce(sendQuery, 200);

    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
          prevSearch.cancel();
      }
      return search;
    });
    if (value.length >= 3) {
      if (value) {
        search(value);
      } else {
        setDataList([]);
        setErrorMssg('');
      }
    }
    //else if(value.length)
  };

  const sendQuery = async value => {
    const { cancelPrevQuery, result } = await fetchData(value);

    if (cancelPrevQuery) return;

    if (result.Response === 'True') {
      setMovies(result.Search);
      if (cancelPrevQuery) return;
      setDataList(result.Search);
      setErrorMssg('');
    } else {
      setDataList([]);
      setErrorMssg(result.Error);
    }
  };

    const topFilms = movies;

  return (
    <div>
      {/* <div className="control">
        <input
          className="input"
          onChange={onChange}
          type="text"
          value={query}
          placeholder="Search your movies"
        />
      </div> */}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={topFilms}
        getOptionLabel={(option) => option.Title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search Movies"
            onChange={onChange}
            value={query}
          />
        )}
      />
      <div>
        <CardList items={dataList} />
        {errorMssg}
      </div>
    </div>
  );
};


export default SearchBar;