var express = require('express');
var router = express.Router();
var objects = require('../public/javascripts/objects.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
	console.log('someone is loging, ', 'STRINGED:', JSON.stringify(objects.user));
	res.jsonp(objects.user);
});

/////////////////////////////////AMENITIES

router.get('/ver-reservas', function(req, res, next) {
	//TE TRAE 10 RESERVAS
	res.send(JSON.stringify(objects.reservas));
});

router.get('/ver-reservas/:numero', function(req, res, next) {
	//TE TRAE 20 RESERVAS mas
	res.send(JSON.stringify(objects.masReservas));
});

/////////////////////////////////RECLAMOS
router.get('/reclamos', function(req, res, next) {
//TE TRAE 10 RECLAMOS
	res.send(JSON.stringify(objects.reclamos));
});
router.get('/reclamos/:numero', function(req, res, next) {
//TE TRAE 20 RECLAMOS mas
	/*res.send(JSON.stringify(objects.masReclamos));*/
	res.send(JSON.stringify(objects.masReclamos));
});

/////////////////////////////////COMENTARIOS
router.get('/comentarios', function(req, res, next) {
//TE TRAE 10 COMENTARIOS
	res.send(objects.comentarios);
});
router.get('/comentarios/:numero', function(req, res, next) {
//TE TRAE 20 COMENTARIOS mas
	res.send(objects.masComentarios);
});

/////////////////////////////////NOVEDADES
router.get('/novedades', function(req, res, next) {
//TE TRAE 10 NOVEDADES
	res.send('index', { title: 'Express' });
});
router.get('/novedades/:numero', function(req, res, next) {
//TE TRAE 20 NOVEDADES mas
	res.send('index', { title: 'Express' });
});

/////////////////////////////////INFO
router.get('/datos-utiles', function(req, res, next) {
//TE TRAE 10 INFO
	res.send('index', { title: 'Express' });
});

/////////////////////////////////EXPENSAS
router.get('/expensas', function(req, res, next) {
//TE TRAE 10 EXPENSAS
	res.send('index', { title: 'Express' });
});
router.get('/expensas/:numero', function(req, res, next) {
//TE TRAE 20 EXPENSAS mas
	res.send('index', { title: 'Express' });
});

/////////////////////////////////DOCUMENTOS
router.get('/ver-documentos', function(req, res, next) {
//TE TRAE 10 DOCUMENTOS
	res.send('index', { title: 'Express' });
});
router.get('/ver-documentos/:numero', function(req, res, next) {
//TE TRAE 20 DOCUMENTOS mas
	res.send('index', { title: 'Express' });
});
module.exports = router;