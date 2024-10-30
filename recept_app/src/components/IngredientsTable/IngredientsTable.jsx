import styles from "./IngredientsTable.module.css"
import { styled, Table, TableBody, TableCell, tableCellClasses  ,TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper'


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));
export default function IngredientsTable({ingredients , id}){
    return  <span className={styles.table}>
    <TableContainer elevation={0}   component={Paper}>
    <h4>Ingredienser</h4>
    <Table aria-label="Ingredients">
      <TableHead>
        <TableRow>
          <StyledTableCell>Namn</StyledTableCell>
          <StyledTableCell align="right">Mängd</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ingredients.map((ingredient, index) => (
          <StyledTableRow
          key={ingredient.name + index + id }
          sx={{
            "&:last-child td, &:last-child th": { border:0 },
          }}
          >
            <TableCell component="th" scope="row">
              {ingredient.name}
            </TableCell>
            <TableCell align="right">
              {ingredient.amount + `(${ingredient.unit})`}
            </TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
        </span>
}