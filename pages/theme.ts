//この画面でcomponentのcolorが変更できる
import { createTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#ea80fc',
    },
  },
});

export default theme