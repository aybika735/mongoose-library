const {Router} = require('express');
const {clientscontroller} = require('../controllers/clients.controllers')
const router = Router();


router.post('/clients', clientscontroller.createClient);
router.patch('/clients/addbook/:id', clientscontroller.addBookClient);
router.delete('/clients/:id', clientscontroller.deleteClientById);
router.patch('/clients/admin/:id', clientscontroller.returnBookAndBlocked);

router.delete('/returnbook/:id', clientscontroller.returnBook);
router.get('/clients/:id', clientscontroller.getClientById);
router.get('/clients', clientscontroller.getAllClients);


module.exports = router;