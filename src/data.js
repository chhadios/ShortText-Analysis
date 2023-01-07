import Papa from "papaparse";
import axios from 'axios';
import React, { useState } from 'react'
const getposts = async () => {
  try {
    const response = await axios.get('data.csv');
    const data = Papa.parse(response.data);
    // console.log(data.data)
    setData(data.data);
  } catch (error) {
    throw error;
  }
}
getposts()

var Level1 = [
  // {
  //   id: "",
  //   text: "",
  //   reviewCount: 0,
  //   reviewRating: 0,
  //   sentiments:"",
  //   Level2: [
  //     {
  //       id: "",
  //       text: "",
  //       PhraseCount: 0,
  //       PhraseRating: 0,
  //       Level3: [
  //       ]
  //     }
  //   ]
  // }
]
const setData = (data) => {
  for (var i = 1; i < data.length-1; i++) {
    var index = Level1.findIndex(x => x.id === data[i][7]);
    if (index > -1) {
      var Level2index = Level1[index].Level2.findIndex(x => x.id === data[i][13]);
      if (Level2index > -1) {
        Level1[index].Level2[Level2index].Level3.push({
          id: data[i][19],
          text: data[i][20]
        })
      } else {
        Level1[index].Level2.push({
          id: data[i][13],
          text: data[i][14],
          PhraseCount: data[i][15],
          PhraseRating: data[i][18],
          Level3: []
        });
        const n = Level1[index].Level2.length - 1;
        Level1[index].Level2[n].Level3.push({
          id: data[i][19],
          text: data[i][20]
        })

      }

    } else {
      Level1.push(
        {
          id: data[i][7],
          text: data[i][8],
          reviewCount: data[i][10],
          reviewRating: data[i][12],
          sentiments:data[i][0],
          Level2: []
        }
      )
    }

  }
}
// console.log(Level1)

export default Level1