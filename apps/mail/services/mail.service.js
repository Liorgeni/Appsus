import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
export const mailService = {
    get,
    getNextMailId,
    remove,
    save,
    query,
    getEmptyMail,
    getDefaultFilter,
    getUnreadCount
}
const MAIL_KEY = 'mailDB'
_createMails()

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus',
}

const criteria = {
    status: 'inbox',
    txt: '', // no need to support complex text search
    isRead: false, // (optional property, if missing: show all)
    isStared: false, // (optional property, if missing: show all)
    lables: ['important'], // has any of the labels
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
}

function query(filterBy) {
    return storageService.query(MAIL_KEY).then((mails) => {
        const type = filterBy.status
            if(type === 'unread'){
                mails = mails.filter(mail => !mail.isRead)
            } else if(type === 'read') {
                mails = mails.filter(mail => mail.isRead)         
            } else{
                mails = mails.filter(mail => mail[type])         
            }
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            mails = mails.filter((mail) => regex.test(mail.subject)) 
        }
        return mails
    })
}

function getUnreadCount(){
    return storageService.query(MAIL_KEY).then((mails) => {
        const count = mails.filter(mail => !mail.isRead && mail.inbox).length
        return count
    })
}
function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY).then((mails) => {
        var idx = mails.findIndex((mail) => mail.id === mailId)
        if (idx === mails.length - 1) idx = -1
        return mails[idx + 1].id
    })
}

function getDefaultFilter() {
    return { ...criteria }
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

function getEmptyMail(subject = '', body = '', to = '') {
    return {
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
        to,
        sent: false,
        trash: false,
        draft: false,
        inbox: true,
        starred: false,
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        const emails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e102',
                subject: 'urgent task',
                body: 'bug on CPU component',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e103',
                subject: 'Holiday sale on Billabong',
                body: 'come to see the cloths',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e104',
                subject: 'Updates from the university',
                body: 'extra time for every exam on 2023',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e105',
                subject: 'Adopt a Cat',
                body: 'Animal shalter is ready to give you a new friend',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e106',
                subject: 'Guitar lessons - master your skills',
                body: 'unlimited Guitar riffs, learn music theory.',
                isRead: true,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: true,
                trash: false,
                draft: false,
                inbox: false,
                starred: true,
            },
            {
                id: 'e107',
                subject: 'Guitar lessons2 - master your skills',
                body: 'unlimited Guitar riffs, learn music theory.',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: true,
                draft: false,
                inbox: false,
                starred: false,
            },
            {
                id: 'e108',
                subject: 'Urgent - new bug on the system',
                body: 'All software testing is conducted with the intention of identifying anomalies and issues that prevent software from working as expected. However, these anomalies are divided into categories to make it easier to plan debugging activities for each.',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: true,
                draft: false,
                inbox: false,
                starred: false,
            },
            {
                id: 'e109',
                subject: 'Guitar lessons3 - master your skills',
                body: 'unlimited Guitar riffs, learn music theory.',
                isRead: true,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: true,
                draft: false,
                inbox: false,
                starred: false,
            },
            {
                id: 'e110',
                subject: 'Guitar lessons4 - master your skills',
                body: 'unlimited Guitar riffs, learn music theory.',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e111',
                subject: 'Guitar lessons3 - master your skills',
                body: 'unlimited Guitar riffs, learn music theory.',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: true,
                trash: false,
                draft: false,
                inbox: false,
                starred: false,
            },
            {
                id: 'e111',
                subject: 'UP TO 70% OFF END OF YEAR SALE',
                body: 'SHOP OUR INSTA Get your fave looks from our feed',
                isRead: false,
                sentAt: 1551133930457,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e112',
                subject: 'your latest PlayStation Plus update is here',
                body: 'Latest Game Catalogue update! We\`ve just added some fantastic titles to the Game Catalogue that you don\`t want to miss. Check out what\`s new below and upgrade your membership to PlayStation®Plus Extra or PlayStation Plus Deluxe to play today.',
                isRead: false,
                sentAt: 1551133930457,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e113',
                subject: 'Black Friday deals are coming to an end',
                body: 'Loads of discounts are still live, but you better be quick – you only have until 23:59 GMT',
                isRead: true,
                sentAt: 1551133930457,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e114',
                subject: 'You have 1 new message',
                body: 'Never miss an update with the LinkedIn app',
                isRead: true,
                sentAt: 1551133930457,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            },
            {
                id: 'e115',
                subject: 'Account confirmation: Your Google Cloud free trial',
                body: 'Welcome to Google Cloud. Learn the fundamentals with this tutorial and see what else you can do for free on Google Cloud with our Always Free tier.',
                isRead: false,
                sentAt: 1551133930457,
                to: 'momo@momo.com',
                sent: false,
                trash: false,
                draft: false,
                inbox: true,
                starred: false,
            }
        ]

        utilService.saveToStorage(MAIL_KEY, emails)
    }
}


