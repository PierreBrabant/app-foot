//Les modules
const express = require('express');
const app = express;
const flash = require('connect-flash');
const session = require('express-session');
const route = require('./route/route');
const path = require('path');
const {erreur404} = require('./controller/controller');
const {error}= require('console');