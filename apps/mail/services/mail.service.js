import {utilService} from "../../../services/util.service.js"
import {storageService} from "../../../services/async-storage.service.js"
export const mailServise = {
    get,
    getNextMailId,
    remove,
    save,
    query,


}
const MAIL_KEY = 'mailDB'
_createMails()



const loggedinUser = { 
    email: 'user@appsus.com', 
    fullname: 'Mahatma Appsus' 
}

const criteria = { 
    status: 'inbox/sent/trash/draft', 
    txt: 'puki', // no need to support complex text search isRead: true, 
    // (optional property, if missing: show all) isStared: true, 
    // (optional property, if missing: show all) lables: ['important', 'romantic'] 
    // has any of the labels 
}



const email = { 
    id: 'e101', 
    subject: 'Miss you!', 
    body: 'Would love to catch up sometimes', 
    isRead: false, 
    sentAt : 1551133930594, 
    to: 'momo@momo.com' 
}



function query() {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            console.log('mailsmails', mails);
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     cars = cars.filter(car => regex.test(car.vendor))
            // }
            // if (filterBy.minSpeed) {
            //     cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
            // 
            return mails
        })
}


function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
    
}

function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            if (idx === mails.length - 1) idx = -1
            return mails[idx + 1].id
        })
}


function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}


function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        const emails = [{ 
            id: 'e101', 
            subject: 'Miss you!', 
            body: 'Would love to catch up sometimes', 
            isRead: false, 
            sentAt : 1551133930594, 
            to: 'momo@momo.com' 
        },
        { 
            id: 'e102', 
            subject: 'urgent task', 
            body: 'bug on CPU component', 
            isRead: false, 
            sentAt : 1551133930596, 
            to: 'momo@momo.com' 
        }]
        utilService.saveToStorage(MAIL_KEY, emails)
    }
}

// function _createCar(vendor, maxSpeed = 250) {
//     const car = getEmptyCar(vendor, maxSpeed)
//     car.id = utilService.makeId()
//     return car
// }