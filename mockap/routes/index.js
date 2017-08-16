var express = require('express');
var router = express.Router();
var objects = require('../public/javascripts/objects.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next){
	console.log('someone is loging, ', 'STRINGED:', JSON.stringify(objects.user));
	res.send(objects.user);
});

/////////////////////////////////AMENITIES

router.get('/reservas', function(req, res, next) {
	//TE TRAE 10 RESERVAS
	res.send(objects.reservas);
});

router.get('/reservas/:numero', function(req, res, next) {
	//TE TRAE 20 RESERVAS mas
	res.send(objects.masReservas);
});

/////////////////////////////////RECLAMOS
router.get('/reclamos', function(req, res, next) {
//TE TRAE 10 RECLAMOS
	res.send(objects.reclamos);
});

router.get('/reclamos/:numero', function(req, res, next) {
//TE TRAE 20 RECLAMOS mas
	res.send(objects.masReclamos);
});

/////////////////////////////////COMENTARIOS
router.post('/comentarios', function(req, res, next) {
//TE TRAE 10 COMENTARIOS
	res.send(objects.comentarios);
});
router.post('/comentarios/:numero', function(req, res, next) {
//TE TRAE 20 COMENTARIOS mas
	res.send(objects.masComentarios);
});

/////////////////////////////////NOVEDADES
router.get('/novedades', function(req, res, next) {
//TE TRAE 10 NOVEDADES
	res.send(objects.novedades);
});

router.get('/novedades/:numero', function(req, res, next) {
//TE TRAE 20 NOVEDADES mas
	res.send(objects.masNovedades);
});

/////////////////////////////////INFO
router.get('/datos-utiles', function(req, res, next) {
//TE TRAE 10 INFO
	res.send(objects.datosUtiles);
});

/////////////////////////////////EXPENSAS
router.get('/expensas', function(req, res, next) {
//TE TRAE 10 EXPENSAS
	res.send(objects.expensas);
});

router.get('/expensas/:numero', function(req, res, next) {
//TE TRAE 20 EXPENSAS mas
	res.send(objects.masExpensas);
});

/////////////////////////////////DOCUMENTOS
router.get('/ver-pagos', function(req, res, next) {
//TE TRAE 10 DOCUMENTOS
	res.send(objects.pagos);
});

router.get('/ver-pagos/:numero', function(req, res, next) {
//TE TRAE 20 DOCUMENTOS mas
	res.send(objects.pagos);
});

module.exports = router;