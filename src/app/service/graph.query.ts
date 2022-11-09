import {gql} from 'apollo-angular';

type HeaderDataType ={
  headers: {
    headerName: string;
    email: string;
  }
}
export const GET_HEADER_DATA = gql`
  query GetHeaderData {
    headers {
      headerName
      email
    }
  }
`
