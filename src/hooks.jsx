import React, { useState } from "react";
import axios from "axios";

const useFlip = () => {
  const [isFlip, setIsFlip] = useState(true);

  const flipCard = () => {
      setIsFlip(!isFlip);
  }

  return [isFlip, flipCard];
}

const useAxios = (url) => {
  const [dataList, setDataList] = useState([]);

  const dataObject = async (formatter = data => data, restOfUrl = "") => {
    const res = await axios.get(`${url}${restOfUrl}`)
    setDataList(data => [...data, formatter(res.data)]);
  }

  return [dataList, dataObject]
}

export { useFlip, useAxios };