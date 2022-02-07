import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Input, Loader } from "@cogoport/front/components";
import Dialog from "./dialog";

const Origin = (props) => {
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");
  const [popOverSelectedData, setPopOverSelectedData] = useState("");

  const url = "https://api.santram.dev.cogoport.io/list_locations";

  const getOptions = () => {
    Axios.get(url, {
      // filters: {
        //   q: query || undefined,
        // }
      params: {
        "filters[q]": query || undefined,
      },
    }).then(function (response) {
      setOptions([...(response.data.list || [])]);
      //   console.log(response.data);
    });
  };

  useEffect(() => {
    // console.log("hello");
    setQuery(popOverSelectedData);
  }, [popOverSelectedData]);

  useEffect(() => {
    getOptions();
  }, [query]);

  let locations = [];

  options.forEach((element) => {
    let label = element.display_name;
    let value = element.id;
    locations.push({
      label: label,
      value: value,
    });
  });

  console.log(locations, query);

  const handleInputPopOverChange = (e) => {
    setOptions([]);
    setQuery(e.target.value);
  };

  return (
    <div>
      <Dialog data={options} setPopOverSelectedData={setPopOverSelectedData}>
      
        <Input
          className="Port"
          type="type"
          placeholder="Origin"
          value={query}
          onChange={handleInputPopOverChange}
        >
        </Input>
      </Dialog> 
    </div>
  );
};

export default Origin;
