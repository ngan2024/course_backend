//import app from './app.js';
import app from '../../bed-2026-ex3-rest-thelo_opettaja/src/server.js';

const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});