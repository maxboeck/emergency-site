require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || 'Emergency Site',
    url: META_URL || 'https://emergency-site.dev',
    description:
        META_DESC || 'A boilerplate for emergency information websites.',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#FF0000',
    email: META_EMAIL || 'information@emergency.org',
    telephone: META_TELEPHONE || '+01 234 567 890',
    dateFormat: 'dd LLLL yyyy'
}
