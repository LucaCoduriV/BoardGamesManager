const surveyManagement = require("../model/survey-management");

function vote(req, res) {
    let ip = req.connection.remoteAddress;
    res.send(ip);
}

//survey
function createSurvey(req, res) {
    let idUser = req.params.idUser;
    let candidates = req.body.candidates;
    console.log(candidates);

    //TODO créer le vote
    //`INSERT INTO surveys(sharecode, date, idUser) VALUES('',NOW(),10);`
    //TODO créer les candidats du vote, récupérer l'id du survey créer avant
    //`INSERT INTO candidates(idSurvey, nbVotes, idAPI, idGame) VALUES(1,0,10,NULL);`
    surveyManagement.insertSurvey(idUser, (err, result) => {
        let idSurvey = result.insertId;
        try {
            surveyManagement.insertCandidate(candidates, idSurvey, () => {
                res.status(200).send({ message: "Inséré avec succès !", idSurvey: idSurvey });
            });
        } catch (error) {
            res.status(400).send(error);
        }
    });
}

function deleteSurvey(req, res) {
    surveyManagement.deleteSurvey(req.params.idSurvey, (err, result) => {
        if (err) res.send(err);
        else res.send("deleted succefully");
    });
}

function voteWhileLogged(req, res) {}

function getSurveyByShareCode(req, res) {
    const shareCode = req.params.shareCode;

    surveyManagement.selectSurveyByShareCode(shareCode, (err, result) => {
        res.status(200).send(result);
    });
}
function getSurveyByUserID(req, res) {
    const idUser = req.params.idUser;

    surveyManagement.selectSurveyByUserID(idUser, (err, result) => {
        res.status(200).send(result);
    });
}

function getAllSurveys(req, res) {
    surveyManagement.selectSurveys((err, result) => {
        res.status(200).send(result);
    });
}

function getCandidates(req, res) {
    const idSurvey = req.params.idSurvey;
    surveyManagement.selectCanditatesBySurveyID(idSurvey, (err, result) => {
        res.status(200).send(result);
    });
}

exports.vote = vote;
exports.createSurvey = createSurvey;
exports.deleteSurvey = deleteSurvey;
exports.voteWhileLogged = voteWhileLogged;
exports.getAllSurveys = getAllSurveys;
exports.getSurveyByShareCode = getSurveyByShareCode;
exports.getSurveyByUserID = getSurveyByUserID;
exports.getCandidates = getCandidates;
