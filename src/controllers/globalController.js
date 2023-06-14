import { pharmacyData, convenienceStoreData, coinLaundryData, retaurantData } from '../data/data.js'

export const main = (req, res) => {
    return res.render("main", { pageTitle:'home' })
}
export const restaurant = (req, res) => {
    return res.render("restaurant", { pageTitle:'restaurant', retaurantData})
}
export const convenience_store = (req, res) => {
    return res.render("convenience_store", { pageTitle:'convenience_store', convenienceStoreData})
}
export const pharmacy = (req, res) => {
    return res.render("pharmacy", { pageTitle:'pharmacy', pharmacyData})
}
export const hospital = (req, res) => {
    return res.render("hospital", { pageTitle:'hospital'})
}
export const household_goods_store = (req, res) => {
    return res.render("household_goods_store", { pageTitle:'household_goods_store'})
}
export const coin_laundry = (req, res) => {
    return res.render("coin_laundry", { pageTitle:'coin_laundry', coinLaundryData})
}
export const exchange = (req, res) => {
    return res.render("exchange", { pageTitle:'exchange'})
}
export const tourist = (req, res) => {
    return res.render("tourist", { pageTitle:'tourist'})
}