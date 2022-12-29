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
        if (filterBy.status === 'inbox') {
             mails = mails.filter(mail => mail.inbox)         
        }
        if (filterBy.status === 'sent') {
            mails = mails.filter(mail => mail.sent)
            
        }
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            mails = mails.filter((mail) => regex.test(mail.subject)) 
        }
        // if (filterBy.minSpeed) {
        //     cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)

        return mails
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
            },
            {
                id: 'e106',
                subject: 'Guitar lessons - master your skills',
                body: 'unlimited Guitar riffs, learn music theory.',
                isRead: false,
                sentAt: 1551133930596,
                to: 'momo@momo.com',
                sent: true,
                trash: false,
                draft: false,
                inbox: false,
            },
        ]

        utilService.saveToStorage(MAIL_KEY, emails)
    }
}

function _createMailStorage(inbox = [], sent = [], trash = [], draft = []) {
    const mailStorage = {
        inbox,
        sent,
        trash,
        draft,
    }
    return mailStorage
}
