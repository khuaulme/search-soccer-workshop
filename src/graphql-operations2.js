import gql from "graphql-tag";

/*************************   BASIC  ************************************* */
export const FIND_PLAYERS_BASIC = gql`
  query ($Input: String) {
    players(
      query: { nationality_name: $Input }
      limit: 3
      sortBy: OVERALL_DESC
    ) {
      _id
      short_name
      long_name
      overall
      club_logo_url
      club_name
      club_jersey_number
      player_face_url
      nation_flag_url
      nation_jersey_number
      player_positions
    }
  }
`;

//   query ($Input: String) {
//     players(
//       query: { nationality_name: $Input }
//       limit: 3
//       sortBy: OVERALL_DESC
//     ) {

/*************************   SEARCH   ************************************* */
export const FIND_PLAYERS_SEARCH = gql`
  query FindPlayer($Input: String) {
    search(input: $Input) {
      _id
      short_name
      long_name
      overall
      club_logo_url
      club_name
      club_jersey_number
      player_face_url
      nation_flag_url
      nation_jersey_number
      player_positions
    }
  }
`;
//  query FindPlayer($Input: String) {
//     search(input: $Input) {

/*************************   RELATED   ************************************* */
export const FIND_RELATED_DATA = gql``;
//query FindPlayer($Input: String) {
//   search(input: $Input) {
