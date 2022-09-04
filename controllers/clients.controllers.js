const Client = require("../models/Client.model");
const Book = require("../models/Book.model");

module.exports.clientscontroller = {
  createClient: async function (req, res) {
    try {
      await Client.create({
        name: req.body.name,
        books: req.body.books,
        isBlocked: req.body.isBlocked,
      });
      res.json("Клиент добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  addBookClient: async function (req, res) {
    try {
      const client = await Client.findById(req.params.id);
      const book = await Book.findById(req.body.books);
      if (client.isBlocked === true) {
        return res.json("Клиент заблокирован");
      }
      if (client.books.length >= 3) {
        return res.json("нельзя арендовать больше 3-х книг одновременно");
      }
      if (book.rents!==null) {
        return res.json("эта книга уже арендована другим пользователем");
      }
     
      await Client.findByIdAndUpdate(req.params.id, {
        $push: {
          books: req.body.books,
        },
      });

      res.json("added");
    } catch (error) {
      console.log(error.toString());
    }
  },

  returnBookAndBlocked: async(req, res) => {
    try {
        await Client.findByIdAndUpdate(req.params.id, {
          books: [],
          isBlocked: false
          
        })
       
        res.json(`Книга  свободна `)  
      }  catch (error) {
        console.log(error.toString());
      }
  },
  
  returnBook: async (req, res) => {
    try {
        await Client.findByIdAndUpdate(req.params.id, {
            $pull: { books: req.params.id }
        })
        res.json('giveAway')
    } catch (err) {
        console.log(err);
    }
},

  deleteClientById: async function (req, res) {
    try {
      const client = await Client.findByIdAndRemove(req.params.id);
      res.json("Клиент удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  
  getClientById: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      res.json(client);
    } catch (error) {
      console.log(error.toString());
    }
  },

  getAllClients: async (req, res) => {
    try {
      const clients = await Client.find();
      res.json(clients);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
