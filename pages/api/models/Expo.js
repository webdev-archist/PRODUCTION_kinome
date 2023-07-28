const mongoose = require('mongoose')
, ObjectId = Schema.Types.ObjectId
, expoSchema = mongoose.Schema({
    openningDate_$_date: {default: "", type: String, required: false}
    , closingDate_$_date: {default: "", type: String, required: false}
    , artistes_$_ref_µ_artists: {default: [], type: [ObjectId], required: false}
    , oeuvres_$_ref_µ_oeuvres: {default: [], type: [ObjectId], required: false}
    , slogan: {default: "", type: String, required: false}
    , title: {default: "", type: String, required: false}
    , descr: {default: "", type: String, required: false}
    , affiche_$_file: {default: "", type: String, required: false}
    , options: {default: {}, type: Object, required: false}
    , datas: {default: {yt: {}}, type: Object, required: false}
})

let expoModel

if(!mongoose.modelNames().includes("Expos_KYNOME"))
expoModel = mongoose.model('Expos_KYNOME', expoSchema)
else expoModel = mongoose.model("Expos_KYNOME")

module.export = expoModel


