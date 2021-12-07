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
    heading: "Spotify",
    imageUrl: require("../../assets/DataProcessing/trend_spotify.png"),
  },
  {
    id: 32,
    Mdescription:
      "Every Season is a music season. And we still observe a dip during holidays season maybe students gets more engaged in gaming than studying wathching movies/series or listening to music.",
  },
  {
    id: 33,
    heading: "Percentage of each race by State",
    imageUrl: require("../../assets/DataProcessing/state_race.png"),
  },
  {
    id: 34,
    Mdescription:
      "In all of the states the percentage of hispanic students are always higher than the number of black students.",
  },
  {
    id: 35,
    heading: "Percentage of Students in the given state receiving free lunch",
    imageUrl: require("../../assets/DataProcessing/state_free.png"),
  },
  {
    id: 36,
    Mdescription:
      "In Minnesota the percentage of student who get free lunch is the highest followed by Indiana leading by just 11% from Michigan.",
  },
  {
    id: 49,
    heading: "Correlation",
    imageUrl: require("../../assets/DataProcessing/correlation.png"),
  },
  {
    id: 50,
    Mdescription:
      "We can observe that pct_access and engagement index are positively correlated with the correlation value of 0.5 and 0.75.",
  },
  {
    id: 37,
    heading: "Expenditure of per person by state",
    imageUrl: require("../../assets/DataProcessing/state_expenditure.png"),
  },
  {
    id: 38,
    Mdescription:
      "In The district of Columbia and New York people pay the highest expenditure followed by Massachusetts.",
  },
  {
    id: 39,
    heading: "Distribution of Engagement Index based on state.",
    imageUrl: require("../../assets/DataProcessing/state_engagement.png"),
  },
  {
    id: 40,
    Mdescription:
      "The state in which students show the highest amouunt of engagement is New York which is very closely followed by Arizona then New Hamsphire",
  },
  {
    id: 41,
    heading: "Distribution of Percentage Access based on state",
    imageUrl: require("../../assets/DataProcessing/state_access.png"),
  },
  {
    id: 42,
    Mdescription:
      "New Hampshire followed by Arizona and New York has the highest percentage of students in the district that have at least one page-load event on a given day. This shows similar pattern to that of the engagement index.",
  },
  {
    id: 43,
    heading: "Distribution of User Engagement based on state",
    imageUrl: require("../../assets/DataProcessing/state_user.png"),
  },
  {
    id: 44,
    Mdescription:
      "Connecticut has the highest amount of User Engagements followed by Utah and illinos while Onio and others below it are having <= 0.5M user engagement",
  },
  {
    id: 45,
    heading: "Scatter Plot of Expenditure and Engagement Index based on State",
    imageUrl: require("../../assets/DataProcessing/state_scatter_ee.png"),
  },
  {
    id: 46,
    Mdescription:
      "With the help of scatterplot we can clearly observe that New York is a state which has both higher Engagement Index as well as high Expenditure. While florida has both low Engagement Index and low Expenditure. While the gold zone in the middle is where most state lies with balanced expenditure and engagement index.",
  },
  {
    id: 47,
    heading: "Scatter plot of Percentage free by state and Engagement Index.",
    imageUrl: require("../../assets/DataProcessing/state_scatter_ef.png"),
  },
  {
    id: 48,
    Mdescription:
      "Minesota has the highest percentage of free luch provvided while it's engagement index is of 5.5. Except a few state we notice a trend that usually the higher the Engagement Index lower is the Percentage of free lunch.",
  },
  {
    id: 51,
    heading: "Scatter plot of All platform by state",
    imageUrl: require("../../assets/DataProcessing/all_platform_by_state.png"),
  },
  {
    id: 52,
    Mdescription:
      "The scatter plot above shows the most user engagement state is Utah, Illinois and Massachusetts respetively. Other states are below a million for California and Ohio, and the rest of states are below 500K of user engagement in the year 2020.",
  },
  {
    id: 53,
    heading: "US Map showing Percetage access by State",
    imageUrl: require("../../assets/DataProcessing/us_map1.png"),
  },
  {
    id: 54,
    heading: "US Map showing Engagement Index per State",
    imageUrl: require("../../assets/DataProcessing/us_map2.png"),
  },
  {
    id: 55,
    Mdescription:
      "In this map chart we see data is not complete, not all states in the US are captured in the dataset. The two maps shows similar patterns between percentage access and engagement index in each state as also shown in the bar charts.",
  }
];
export default DataProcessing;
