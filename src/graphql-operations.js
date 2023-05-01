import gql from "graphql-tag";

// export const FIND_PLAYER = gql`
//   query FindPlayer($query: PlayerQueryInput!) {
//     player(query: $query) {
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
//     }
//   }
// `;
// {variables: { query: { short_name: searchTerm } }} PLAYERQUERYINPUT IS AN OBJECT -- this is in my query variables

export const FIND_PLAYER = gql`
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

export const FIND_PLAYER_ADVANCED = gql`
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
