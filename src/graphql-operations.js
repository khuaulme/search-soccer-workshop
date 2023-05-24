import gql from "graphql-tag";

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
      nationality_name
    }
  }
`;

//   query ($Input: String) {
//     players(
//       query: { nationality_name: $Input }
//       limit: 3
//       sortBy: OVERALL_DESC
//     ) {

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
      nationality_name
    }
  }
`;

export const FIND_RELATED_DATA = gql`
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
      nationality_name {
        country
        ChampionshipCount
        FinalsCount
        QuartersCount
        SemisCount
      }
    }
  }
`;

export const FIND_PLAYERS_backup = gql`
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
      score
    }
  }
`;

export const FIND_PLAYERS_ADVANCED = gql`
  query FindPlayerAdvanced($Input: AdvancedSearchInput) {
    searchAdvanced(input: $Input) {
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
      score
    }
  }
`;

// export const FIND_PLAYERS_BASIC = gql`
//   query ($Input: String) {
//     players(
//       query: { nationality_name: $Input }
//       limit: 3
//       sortBy: OVERALL_DESC
//     ) {
//       _id
//       short_name
//       long_name
//       overall
//       club_logo_url
//       club_name
//       club_jersey_number
//       player_face_url
//       nation_flag_url
//       nation_jersey_number
//       player_positions
//       nationality_name
//     }
//   }
// `;
