const mongoose = require('mongoose')
, ObjectId = Schema.Types.ObjectId
, artisteSchema = mongoose.Schema({
    oeuvres_$_ref: {default: [], type: ObjectId, required: false}
    , naissance_$_date: {default: "", type: String, required: false}
    , photos_$_file: {default: [], type: [String], required: false}
    , avatar_$_file: {default: [], type: [String], required: false}
    , SNSs: {default: [], type: Array, required: false}
    , nom: {default: "", type: String, required: false}
    , prenom: {default: "", type: String, required: false}
    , pseudo: {default: "", type: String, required: false}
    , age: {default: "", type: String, required: false}
    , email: {default: "", type: String, required: false}
    , tel: {default: "", type: String, required: false}
    , descr: {default: "", type: String, required: false}
    , genre: {default: "", type: String, required: false}
})

let artisteModel

if(!mongoose.modelNames().includes("Artistes_KYNOME"))
artisteModel = mongoose.model('Artistes_KYNOME', artisteSchema)
else artisteModel = mongoose.model("Artistes_KYNOME")

module.export = artisteModel


