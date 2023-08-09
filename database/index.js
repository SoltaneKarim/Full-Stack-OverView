const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Repo')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });

const repoSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String },
  full_name: { type: String }
});

const Repo = mongoose.model('Repo', repoSchema);

let save = async (repositories) => {
  try {
    await Repo.insertMany(repositories);
    console.log('Repositories saved to MongoDB');
  } catch (error) {
    console.error('Error saving repositories to MongoDB:', error);
    throw error;
  }
}

module.exports.save = save;
module.exports.repo = Repo;
