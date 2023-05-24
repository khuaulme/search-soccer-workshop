import gql from "graphql-tag";

/*************************   BASIC  ************************************* */
export const FIND_PLAYERS_BASIC = gql``;

//   query ($Input: String) {
//     players(
//       query: { nationality_name: $Input }
//       limit: 3
//       sortBy: OVERALL_DESC
//     ) {

/*************************   SEARCH   ************************************* */
export const FIND_PLAYERS_SEARCH = gql``;
//  query FindPlayer($Input: String) {
//     search(input: $Input) {

/*************************   RELATED   ************************************* */
export const FIND_RELATED_DATA = gql``;
//query FindPlayer($Input: String) {
//   search(input: $Input) {
