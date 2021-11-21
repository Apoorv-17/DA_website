const DataProcessing = [
  {
    id: 0,
    title: "Top 20 Product",
  },
  {
    id: 1,
    heading: "Merging Dataset",
    imageUrl: require("../../assets/DataProcessing/merged_df.PNG"),
  },
  {
    id: 2,
    Mdescription:
      "Merging the Engagement Dataset and Product Info Dataset using Left Joint where Engagement Dataset is the left table and Product info is the right table.",
  },
  {
    id: 3,
    heading: "Top 20 Product in table format",
    imageUrl: require("../../assets/DataProcessing/top20_table.png"),
  },
  {
    id: 4,
    heading: "Top 20 product visualized as bar plot.",
    imageUrl: require("../../assets/DataProcessing/top20_barplot.png"),
  },
  {
    id: 5,
    Mdescription:
      "From the given table and plot we can clearly see that the Google products are totally dominating the top 20 products with Google docs, drive and Sheets being the most used and 8 out of top 20 products belonging to google.",
  },
  {
    id: 6,
    title: "Top 20 products by Google",
  },
  {
    id: 7,
    heading: "Top 20 Product by Google in table format",
    imageUrl: require("../../assets/DataProcessing/top20_google_table.png"),
  },
  {
    id: 8,
    heading: "Top 20 Product by Google visualized as bar plot.",
    imageUrl: require("../../assets/DataProcessing/top20_google_barplot.png"),
  },
  {
    id: 9,
    Mdescription:
      "We can clearly observe that how popular the products by google are and due to the pandemic some products such as Google Classroom and Meets have become very popular among both Students and Adults. It is still surprising to see YouTube in at 17th position considering how popular it is.",
  },
  {
    id: 10,
    title: "Top 20 Non-Google Products",
  },
  {
    id: 11,
    heading: "Top 20 Non-Google Products in table format",
    imageUrl: require("../../assets/DataProcessing/top20_non-google_table.png"),
  },
  {
    id: 12,
    heading: "Top 20 Non-Google Products visualized as bar plot.",
    imageUrl: require("../../assets/DataProcessing/top20_non-google_barplot.png"),
  },
  {
    id: 13,
    Mdescription:
      "After removig google products we can observe that the no. 1 spot goes to Wikipedia which comes off as no surprise followed by Netflix which has become even more immensely popular after the pandemic which are then followed by other learning based products.",
  },
  {
    id: 14,
    title: "Products Classified by Essential Fuctions",
  },
  {
    id: 15,
    heading: "Bar Plot",
    imageUrl: require("../../assets/DataProcessing/top20_essential.png"),
  },
  {
    id: 13,
    Mdescription:
      "The Most Popular Category turns out to be Resource & Reference followed by Digital Learning Platforms followed by Study Tools. This actually makes a lot of sense considering that during pandemic students switched to learning through Digital Platforms hence the huge difference over other categories.",
  },
  {
    id: 14,
    heading: "Top 20 products in Resource & Reference",
  },
  {
    id: 15,
    heading: "Table",
    imageUrl: require("../../assets/DataProcessing/top20_essential_table.png"),
  },
  {
    id: 16,
    heading: "Bar Plot",
    imageUrl: require("../../assets/DataProcessing/top20_rar_bar.png"),
  },
  {
    id: 17,
    Mdescription:
      "After observing the table we can see that the non-goolge top 2 contenders Wikipedia and Netflix both belongs to this category giving it a significant boost over other categories as well.",
  },
  {
    id: 18,
    heading: "Top 20 products in Digital Learning Platforms",
  },
  {
    id: 19,
    imageUrl: require("../../assets/DataProcessing/top20_dp.png"),
  },
  {
    id: 20,
    Mdescription:
      "We can observe that Khan Academy is the most popular Digital Learning Platform. Some interesting Inference which can be made here is the presence of TypingClub and Typing.com, seems like more people took up learing to touch type during the pandemic period.",
  },
  {
    id: 21,
    title: "Observing user engagement based on monthly distribution",
  },
  {
    id: 22,
    heading: "Khan Academy",
    Mdescription:
      "Since Khan Academy is the most popular Product in Digital Learning let's observer it's engagement based on the monthly distribution.",
  },
  {
    id: 23,
    imageUrl: require("../../assets/DataProcessing/trend_khan.png"),
  },
  {
    id: 24,
    Mdescription:
      "We can observer that the user engagement is high at all times but there is a huge dip in User Engagement during the Month of June - August this is because it's the month of holidays looks like pandemic hasen't affected the fact that students like to relax and stay away from school/college work during holidays.",
  },
  {
    id: 25,
    heading: "Netflix",
    Mdescription:
      "Considering the above case we might see opposite trend for entertainment based site such as netflix let's take a look at it.",
  },
  {
    id: 26,
    imageUrl: require("../../assets/DataProcessing/trend_netflix.png"),
  },
  {
    id: 27,
    Mdescription:
      "Contrary to what we thaught the trend is the same as Khan Academy with the difference being even if less people watch netflix during holidays they watch it for longer amount of time while during work days more amount of people watch but for less amount of time. We can also observe that after the pandemic hit the netflix has shown a stable overall growth more people are getting into netflix after the pandemic.",
  },
  {
    id: 28,
    heading: "Zoom",
    Mdescription:
      "We know that after the pandemic hit platforms like zoom and meet gained massive popularity let's see if that really the case.",
  },
  {
    id: 29,
    imageUrl: require("../../assets/DataProcessing/trend_zoom.png"),
  },
  {
    id: 30,
    Mdescription:
      "Just as we predicted we can clearly see that after the pandemic hit Zoom has blasted in popularity.",
  },
  {
    id: 31,
    heading: "TypingClub",
    Mdescription:
      "Just out of pure curiosity let's observe the engagement graph for TypingClub",
  },
  {
    id: 32,
    imageUrl: require("../../assets/DataProcessing/trend_typingclub.png"),
  },
  {
    id: 33,
    Mdescription:
      "After observing the graph we can make an interesting inference, Pandemic did help in motivating students to learning touch typing a little or the website might have just became popular like any other sites. The interesting observation to note here is that students who started to learn touch typing either gave up in the early stages or they decided to stick around until they actually fully learned it.",
  },
  {
    id: 34,
    heading: "Spotify",
    imageUrl: require("../../assets/DataProcessing/trend_spotify.png"),
  },
  {
    id: 35,
    Mdescription:
      "Every Season is a music season. And we still observe a dip during holidays season maybe students gets more engaged in gaming than studying wathching movies/series or listening to music.",
  },
];
export default DataProcessing;
