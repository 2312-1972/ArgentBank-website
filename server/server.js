const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocs = yaml.load('./swagger.yaml');
const mongoose = require('mongoose'); // Ajout de mongoose
const app = express();
const PORT = process.env.PORT || 3001;

dotEnv.config();


// Connexion à la base de données
const dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/argentBankDB`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database Connectivity Error:', error);
    throw new Error(error);
  }
};
dbConnection(); 
// Handle CORS issues
app.use(cors());

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'));

// API Documentation
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

app.get('/', (req, res, next) => {
  res.send('Hello from my Express server v2!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
