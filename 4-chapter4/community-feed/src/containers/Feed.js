import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import {Link} from 'react-router-dom'
import './Feed.css'

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;


const ROOT_API = 'https://api.stackexchange.com/2.2/';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: '',
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`,
      );
      const dataJSON = await data.json();

      if (dataJSON) {
        this.setState({
          data: dataJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading || error) {
      return <Alert>{loading ? 'Loading...' : error}</Alert>;
    }

    return (
      <FeedWrapper>
        {data.items.map(item =>
             <Link id="link" to={`/questions/${item.question_id}`}>
                    <Card key={item.question_id} data={item} />
             </Link>
        )}
      </FeedWrapper>
    );
  }
}

export default Feed;