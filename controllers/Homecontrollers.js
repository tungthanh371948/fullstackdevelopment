import express from "express";

let GetHomePage = (req, res) => {
    return res.render('homePage.ejs')
}

let GetAboutPage = (req, res) => {
    return res.render('./test/about.ejs')
}

module.exports = {
    GetHomePage: GetHomePage,
    GetAboutPage: GetAboutPage,
}