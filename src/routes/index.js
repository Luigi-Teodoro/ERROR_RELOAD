import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index', {title:'Inicio'}));
router.get('/about', (req, res) => res.render('catalago', {title:'Catalogo'}));
router.get('/contact', (req, res) => res.render('contactanos', {title:'Contactanos'}));
router.get('/login', (req, res) => res.render('log', {title:'login'}));
router.get('/register', (req, res) => res.render('regis', {title:'Registro'}));
router.get('/informacion', (req, res) => res.render('sobre_nosotros', {title:'Nosotros'}));
router.get('/infochaqueta', (req, res) => res.render('info_chaqueta', {title:'Chaqueta'}));
router.get('/infoshort', (req, res) => res.render('info_short', {title:'Short'}));
router.get('/infopolo', (req, res) => res.render('info_polo', {title:'Polo'}));
router.get('/infopolonike', (req, res) => res.render('info_polo_nike', {title:'Polo Nike'}));
router.get('/infochaquetabomber', (req, res) => res.render('info_chaqueta_bomber', {title:'Chaqueta Bomber'}));
router.get('/infoshortalgodon', (req, res) => res.render('info_short_algodon', {title:'Short Algodon'}));
router.get('/infojean', (req, res) => res.render('info_jean', {title:'Jean'}));
router.get('/infojean2', (req, res) => res.render('info_jean2', {title:' Atheletic Jean'}));
router.get('/solochaquetas', (req, res) => res.render('solo_chaquetas', {title:'Chaquetas'}));
router.get('/soloshort', (req, res) => res.render('solo_short', {title:'Shorts'}));
router.get('/solopolos', (req, res) => res.render('solo_polos', {title:'Polos'}));
router.get('/solojeans', (req, res) => res.render('solo_jeans', {title:'Jeans'}));





export default router;