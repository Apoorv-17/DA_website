const DataCleaning = [
  {
    id: 0,
    title: "District Info",
  },
  {
    id: 1,
    heading: "Before Cleaning",
    imageUrl: require("../../assets/DataCleaning/di_dirty.PNG"),
  },
  {
    id: 2,
    Mdescription:
      "From the above Image we can clearly observe that the last 4 columns in our dataset contains useless square brackets- '[' and the ratios of these columns can also be splitted into there respective columns",
  },
  {
    id: 3,
    heading: "After Cleaning",
    imageUrl: require("../../assets/DataCleaning/di_clean.PNG"),
  },
  {
    id: 4,
    Mdescription:
      "Removed the brackets splitted ratios into there respective columns and and changed the datatypes which properly suit the respective columns",
  },
  {
    id: 5,
    title: "Product Info",
  },
  {
    id: 6,
    heading: "Before Cleaning",
    imageUrl: require("../../assets/DataCleaning/pi_dirty.PNG"),
  },
  {
    id: 7,
    Mdescription:
      "Names of columns contains '`', sectors only contains 3 values, primary essential functions can be further splitted.",
  },
  {
    id: 8,
    heading: "After Cleaning",
    imageUrl: require("../../assets/DataCleaning/pi_clean.PNG"),
  },
  {
    id: 9,
    Mdescription:
      "Cleaned column names, splitted sector columns into their respective column (pre_k_12, higher_ed and corporate) and changed the column to logical datatype. Primary essential function were also splitted into primary, essential and func columns.",
  },
  {
    id: 10,
    title: "Engagement Dataset",
  },
  {
    id: 12,
    imageUrl: require("../../assets/DataCleaning/ed_clean.PNG"),
  },
  {
    id: 13,
    Mdescription:
      "Merging all the 233 csv files corresponding to diffrent districts into a single csv file and changing all the columns to the appropriate datatype.",
  },
];

export default DataCleaning;
