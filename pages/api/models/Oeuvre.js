const mongoose = require('mongoose')
, ObjectId = Schema.Types.ObjectId
, oeuvreSchema = mongoose.Schema({
    artistes_$_ref: {default: [], type: ObjectId, required: false}
    , released_$_date: {default: "", type: String, required: false}
    , photos_$_file: {default: [], type: [String], required: false}
    , slogan: {default: "", type: String, required: false}
    , title: {default: "", type: String, required: false}
    , descr: {default: "", type: String, required: false}
    , prix: {default: "", type: String, required: false}
    , genre: {default: "", type: String, required: false}
})

let oeuvreModel

if(!mongoose.modelNames().includes("Oeuvres_KYNOME"))
oeuvreModel = mongoose.model('Oeuvres_KYNOME', oeuvreSchema)
else oeuvreModel = mongoose.model("Oeuvres_KYNOME")

module.export = oeuvreModel


