import React from 'react';
import styled from 'styled-components';
import Lane from '../components/Lane/Lane';
import withDataFetching from "../withDataFetching";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;
 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


class Board extends React.Component {
       constructor() {
              super();
              this.state={
                     tickets: [],
              };
       }

       componentDidUpdate(prevProps) {
              if (prevProps.data !== this.props.data) {
                     this.setState({tickets: this.props.data});
              }
       }

       onDragStart = (e, id) => {
              e.dataTransfer.setData('id', id);
       }

       onDragOver=e=>{
              e.preventDefault();
       }

       onDrop =(e, laneId) => {
              const id = e.dataTransfer.getData('id');

              const tickets = this.state.tickets.filter(ticket => {
                     if(ticket.id === parseInt(id)) {
                            ticket.lane= laneId;
                     }
                     return ticket;
              });

              this.setState({
                     ...this.state,
                     tickets,
              })
       }

       render() {
              const {lanes, loading, error} = this.props;
              return (
                  <BoardWrapper>
                         {lanes.map(lane => (
                             <Lane key={lane.id} title={lane.title}
                                   laneId={lane.id}
                                   loading={loading}
                                   error={error}
                                   onDragStart={this.onDragStart}
                                   onDragOver={this.onDragOver}
                                   onDrop={this.onDrop}
                                   tickets={this.state.tickets.filter(ticket => ticket.lane === lane.id)}
                             />
                         ))}
                  </BoardWrapper>
              )
       }
}

// const Board = ({ lanes, loading, error, data }) => (
//     <BoardWrapper>
//       {lanes.map(lane => (
//            <Lane key={lane.id} title={lane.title}
//            loading={loading}
//            error={error}
//            tickets={data.filter(ticket => ticket.lane === lane.id)}
//            />
//          ))}
//        </BoardWrapper>
// );

export default withDataFetching(Board);

// class Board extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       loading: true,
//       error: '',
//     }
//   }
//
//   async componentDidMount() {
//     try {
//       const tickets = await fetch('../../assets/data.json');
//       const ticketsJSON = await tickets.json()
//
//       if (ticketsJSON) {
//         this.setState({
//           data: ticketsJSON,
//           loading: false,
//         });
//       }
//     } catch (e) {
//       this.setState({
//         loading: false,
//         error: e.message,
//       })
//     }
//   }
//
//   render() {
//
//     const { data, loading, error } = this.state
//
//     const lanes = [
//       { id: 1, title: 'To Do' },
//       { id: 2, title: 'In Progress' },
//       { id: 3, title: 'Review' },
//       { id: 4, title: 'Done' },
//     ];
//
//     return (
//       <BoardWrapper>
//         {lanes.map(lane => (
//           <Lane key={lane.id} title={lane.title}
//           loading={loading}
//           error={error}
//           tickets={data.filter(ticket => ticket.lane === lane.id)}
//           />
//         ))}
//       </BoardWrapper>
//     );
//   }
// }
//
// export default Board;
