//CODE DONNÉE PAR CHATGPT

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const faker = require('faker'); // Assurez-vous d'avoir installé la bibliothèque Faker

const expoSchema = mongoose.Schema({
    openningDate_$_date: { default: "", type: String, required: false },
    closingDate_$_date: { default: "", type: String, required: false },
    artistes_$_ref_µ_artists: { default: [], type: [Schema.Types.ObjectId], required: false },
    oeuvres_$_ref_µ_oeuvres: { default: [], type: [Schema.Types.ObjectId], required: false },
    slogan: { default: "", type: String, required: false },
    title: { default: "", type: String, required: false },
    descr: { default: "", type: String, required: false },
    affiche_$_file: { default: "", type: String, required: false },
    options: { default: {}, type: Object, required: false },
    datas: { default: { yt: {} }, type: Object, required: false }
});

const ExpoModel = mongoose.model('Expos_KYNOME', expoSchema);

async function generateExpoData() {
    const expoData = [];

    for (let i = 0; i < 20; i++) {
        const startDate = faker.date.between('2023-08-01', '2023-09-30');
        const endDate = faker.date.between(startDate, '2023-09-30');

        const expo = {
            openningDate_$_date: startDate.toISOString(),
            closingDate_$_date: endDate.toISOString(),
            artistes_$_ref_µ_artists: [], // Remplissez les artistes comme nécessaire
            oeuvres_$_ref_µ_oeuvres: [], // Remplissez les oeuvres comme nécessaire
            slogan: faker.lorem.sentence(),
            title: faker.company.companyName(),
            descr: faker.lorem.paragraph(),
            affiche_$_file: faker.image.imageUrl(),
            options: {}, // Remplissez les options comme nécessaire
            datas: { yt: {} }
        };

        expoData.push(expo);
    }

    await ExpoModel.insertMany(expoData);
    console.log('Données générées et insérées avec succès.');
}

generateExpoData();
