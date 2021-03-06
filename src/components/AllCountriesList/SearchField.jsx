import React, { Component } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Select,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";

export default class SearchField extends Component {
  constructor() {
    super();

    this.state = {
      country: [],
      countryName: "",
    };
  }

  handleSearchInput = (e) => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({
      countryName: value,
    });
    this.searchCountry();
  };

  searchCountry = (e) => {
    e && e.preventDefault();
    const { countryName } = this.state;
    this.props.searchCountry(countryName);
  };

  handleSelect = (e) => {
    const region = e.target.value;
    let url = `https://restcountries.eu/rest/v2/region/${region}`;
    if (region === "all") {
      url = "https://restcountries.eu/rest/v2/all";
    }
    this.props.getCountries(url);
  };

  clearInput = () => {
    this.setState({
      countryName: "",
    });
    this.props.getCountries("https://restcountries.eu/rest/v2/all");
  };

  render() {
    const { countryName } = this.state;
    return (
      <form className="search-container" onSubmit={this.searchCountry}>
        <FormControl>
          <div className="search-container-grid">
            <div>
              <FormLabel>Enter Country</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  id="country"
                  rounded="0"
                  value={countryName}
                  onChange={this.handleSearchInput}
                  placeholder="this will automatically search"
                />
                <InputRightAddon
                  onClick={this.clearInput}
                  children="Clear"
                  style={{ cursor: "pointer" }}
                />
              </InputGroup>
            </div>
            <div>
              <FormLabel>Filter by Region</FormLabel>
              <Select isRequired onChange={this.handleSelect}>
                <option defaultValue value="all">
                  All
                </option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </Select>
            </div>
          </div>
        </FormControl>
      </form>
    );
  }
}
