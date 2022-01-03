import { createSlice } from "@reduxjs/toolkit";
const DUMMY_DATA = {
  items: [
    {
      id: 1,
      date: "02 de Jul, 2021",
      hearted: false,
      title: "Agora é oficial: o Windows 11 está vindo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel velit consectetur pulvinar. Ut ut accumsan erat, in lacinia tellus. Praesent sodales, mauris ac fermentum malesuada, ex eros.",
    },
    {
      id: 2,
      date: "02 de Jul, 2021",
      hearted: false,
      title: "Tim Berners-Lee vai leiloar código-fonte da web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel velit consectetur pulvinar. Ut ut accumsan erat, in lacinia tellus. Praesent sodales, mauris ac fermentum malesuada, ex eros.",
    },
    {
      id: 3,
      date: "02 de Jul, 2021",
      hearted: false,
      title: "Tem Firefox novo no pedaço e você vai querer migrar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante vel velit consectetur pulvinar. Ut ut accumsan erat, in lacinia tellus. Praesent sodales, mauris ac fermentum malesuada, ex eros.",
    },
  ],
};

const initialList = {
  defaultList: DUMMY_DATA.items,
  list: DUMMY_DATA.items,
  word: "",
};

const listSlice = createSlice({
  name: "searchList",
  initialState: initialList,
  reducers: {
    searchResult(state, action) {
      state.list = state.defaultList.filter((item) =>
        item.title.includes(action.payload)
      );
      state.word = action.searchWord;
    },

    addHeart(state, action) {
      const findValue = state.defaultList.find(
        (item) => item.id === action.payload
      );

      if (findValue) {
        state.defaultList.map((item) => {
          if (item.id === findValue.id) {
            item.hearted = !item.hearted;
          }
          return item;
        });
      }
      console.log(findValue.hearted);
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice.reducer;
