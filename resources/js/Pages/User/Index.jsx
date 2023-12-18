import React from 'react'
import Table from '../../components/Table';
import TableData from '../../components/TableData';
import TableRow from '../../components/TableRow';
import Copy from '../../components/Copy';


const columns = [
  { field: 'name' },
  { field: 'email' },
]
const Index = ({ users }) => {


  return (
    <div>
      <Table columns={columns}>
        {
          users.data.map(item => (
            <TableRow>
              <TableData>{item.name}</TableData>
              <TableData>
                <Copy text={item.email} >{item.email}</Copy>
              </TableData>
            </TableRow>
          ))
        }
      </Table>
    </div>
  )
}

export default Index;